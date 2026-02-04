const CreateEventView = () => (
  <div className="view-container fade-in">
    <section className="intro-text">
      <h2>Create new event</h2>
      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit.</p>
    </section>

    <div className="form-card">
      <form className="event-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group full-width">
          <label htmlFor="eventName">Event Name</label>
          <input type="text" id="eventName" placeholder="Adobe XD Auto - Animate : Your Guide to Creating" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start date / Time</label>
            <input type="text" id="startDate" placeholder="September 24, 2017 07:59 am" />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date / Time</label>
            <input type="text" id="endDate" placeholder="September 24, 2017 07:59 am" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="notification">Notification</label>
            <select id="notification">
              <option>30 mins</option>
              <option>1 hour</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="jessica.hansome@example.com" />
          </div>
        </div>

        <div className="form-group ">
          <label htmlFor="description">Event Description</label>
          <textarea id="description" rows={5} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur "></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">Save Now</button>
        </div>
      </form>
    </div>
  </div>
);

export default CreateEventView;