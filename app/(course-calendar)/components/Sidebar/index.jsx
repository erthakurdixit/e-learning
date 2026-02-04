import { useState } from 'react';
import SidebarItem from '../SidebarItem';
import Image from 'next/image';

const Sidebar = ({ isOpen, toggleSidebar, sections }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleSelectItem = (id) => {
    setSelectedItemId(id);
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      />

      <nav className={`sidebar ${isOpen ? 'active' : ''}`} aria-label="Course lessons"> 
        <button className='back-btn'>
          <Image src="/images/arrow-back.svg" alt='back arrow button icon' width={18} height={22}/></button>
        {sections.map((section) => (
          <div key={section.title} className="sidebar-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="item-list">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.id}
                  {...item}
                  colorVariant={item.color}
                  isSelected={selectedItemId === item.id}
                  onClick={() => handleSelectItem(item.id)} 
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;