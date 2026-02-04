
export default function CourseNavbar({ activeTab, onChange }) {
    const tabs = [
        { id: 'course', label: 'Course Home' },
        { id: 'event', label: 'Create Event' },
        { id: 'calendar', label: 'Calendar' },
        { id: 'referral', label: 'Share & Refer' },
    ];
    return (
        <nav className="demo-nav">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    )
}