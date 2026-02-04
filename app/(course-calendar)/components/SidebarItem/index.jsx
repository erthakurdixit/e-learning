import Image from 'next/image';

const SidebarItem = ({ title, duration, colorVariant, isSelected, onClick }) => {
  return (
    <div
      className={`sidebar-item variant-${colorVariant} ${isSelected ? 'active' : ''}`}
      role="button"
      tabIndex={0}
      onClick={onClick} // To toggle the selected state
    >
      <div className="icon-book">
        <Image
          src="/images/black-book.svg"
          alt="Book icon"
          height={15}
          width={15}
          className={isSelected ? 'selected-icon' : ''}
        />
      </div>
      <div className="item-details">
        <span>{`Lesson 01 : ${title}`}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default SidebarItem;