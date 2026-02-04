const CalendarView = () => (
    <div className="view-container fade-in">
        <section className="intro-text">
            <h2>Share and refer</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit.</p>
        </section>

        <div className="calendar-card">
            <div className="calendar-layout">
                <div className="calendar-widget">
                    <div className="cal-header">
                        <button className="cal-nav">{'<'}</button>
                        <span className="cal-month">September 2021</span>
                        <button className="cal-nav">{'>'}</button>
                    </div>
                    <div className="cal-grid">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(day => (
                            // <div key={day} className={`cal-day ${day === 24 ? 'selected' : ''}`}>{day}</div>
                            <div key={day} className={`cal-day`}>{day}</div>
                        ))}
                    </div>
                </div>

                <div className="timeline-widget">
                    <div className="timeline-header">Sep 12, Monday</div>
                    <div className="timeline-body">
                        <div className="time-slot">
                            <span className="time-label">2 PM</span>
                            <div className="event-pill red">
                                Adobe XD Live Class
                            </div>
                        </div>
                        <div className="time-slot">
                            <span className="time-label">3 PM</span>
                        </div>
                        <div className="time-slot">
                            <span className="time-label">4 PM</span>
                        </div>
                        <div className="time-slot">
                            <span className="time-label">5 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CalendarView;