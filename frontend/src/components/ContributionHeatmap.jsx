import { useEffect, useState } from 'react';

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function ContributionHeatmap({ username }) {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    let disposed = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`, { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Unavailable'); return response.json(); })
      .then(data => {
        if (!Array.isArray(data.contributions)) throw new Error('Invalid data');
        const days = data.contributions.filter(day => /^\d{4}-\d{2}-\d{2}$/.test(day.date) && Number.isFinite(day.count) && [0, 1, 2, 3, 4].includes(day.level)).sort((a, b) => a.date.localeCompare(b.date));
        if (!days.length) throw new Error('No data');
        if (!disposed) setResult({ username, days });
      })
      .catch(() => { if (!disposed) setResult({ username, error: true }); })
      .finally(() => clearTimeout(timeout));
    return () => { disposed = true; clearTimeout(timeout); controller.abort(); };
  }, [username]);

  if (!result || result.username !== username) return <p className="heatmap-status" role="status">Loading contributions…</p>;
  if (result.error) return <p className="heatmap-status" role="status">Contributions are unavailable right now. You can still view them using the GitHub link above.</p>;

  // Keep only the latest available month and its two preceding months.
  const latestDate = new Date(`${result.days.at(-1).date}T00:00:00Z`);
  const cutoff = new Date(Date.UTC(latestDate.getUTCFullYear(), latestDate.getUTCMonth() - 2, 1)).toISOString().slice(0, 10);
  const recentDays = result.days.filter(day => day.date >= cutoff);
  const months = new Map();
  const recordedDays = new Map(recentDays.map(day => [day.date, day]));
  const lastRecordedDate = result.days.at(-1).date;
  const today = new Date().toLocaleDateString('en-CA');
  const calendarEnd = new Date(Date.UTC(latestDate.getUTCFullYear(), 11, 31));
  const cursor = new Date(`${cutoff}T00:00:00Z`);
  while (cursor <= calendarEnd) {
    const date = cursor.toISOString().slice(0, 10);
    const key = date.slice(0, 7);
    if (!months.has(key)) months.set(key, []);
    months.get(key).push(recordedDays.get(date) || {
      date,
      count: 0,
      level: 0,
      pending: true,
      future: date > today,
    });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  const total = recentDays.reduce((sum, day) => sum + day.count, 0);
  return (
    <>
      <div className="heatmap-topline"><span>Contribution activity</span><span>Through December {latestDate.getUTCFullYear()}</span></div>
      <div className="heatmap-scroll" role="region" tabIndex={0} aria-label={`${total} recorded contributions. Calendar through December; future dates are empty. Scroll to view all months.`}>
        <div className="heatmap-calendar">
          <div className="heatmap-weekdays" aria-hidden="true">{weekdays.map(day => <span key={day}>{day}</span>)}</div>
          {Array.from(months, ([month, days]) => {
            const first = new Date(`${month}-01T00:00:00Z`);
            const offset = (first.getUTCDay() + 6) % 7;
            return <div className="heatmap-month" key={month}>
              <span className="heatmap-month-label">{first.toLocaleDateString('en', { month: 'short', timeZone: 'UTC' })} <span>{month.slice(2, 4)}</span></span>
              <div className="heatmap-days">
                {days.map(day => {
                  const slot = Number(day.date.slice(8)) - 1 + offset;
                  return <span key={day.date} className="heatmap-cell" data-level={day.level} data-pending={day.pending || undefined} style={{ gridRow: slot % 7 + 1, gridColumn: Math.floor(slot / 7) + 1 }} title={day.pending ? `${day.date}: ${day.future ? 'Future date' : 'Data not yet available'}` : `${day.date}: ${day.count} contribution${day.count === 1 ? '' : 's'}`} aria-label={day.pending ? `${day.date}: ${day.future ? 'Future date' : 'Data not yet available'}` : `${day.date}: ${day.count} contributions`} />;
                })}
              </div>
            </div>;
          })}
        </div>
      </div>
      <div className="heatmap-footer"><span>{total.toLocaleString()} contributions · through {lastRecordedDate}</span><span className="heatmap-legend" aria-label="Green intensity from fewer to more contributions">Less {[0, 1, 2, 3, 4].map(level => <i className="heatmap-cell" data-level={level} key={level} />)} More</span></div>
    </>
  );
}


