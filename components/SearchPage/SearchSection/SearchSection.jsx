"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './SearchSection.module.scss';

/**
 * Custom Dropdown Component
 */
const FilterDropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.filterDropdownContainer}>
      <button 
        className={styles.filterButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.filterLabel}>{label}</span>
        <ChevronDown 
          size={18} 
          className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`} 
        />
      </button>
      
      {isOpen && (
        <ul className={styles.filterMenu} role="listbox">
          {options.map((opt, i) => (
            <li key={i} className={styles.filterItem} role="option">
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { label: "Subject", options: ["Computer Science", "Business", "Arts", "Science"] },
    { label: "Partner", options: ["University A", "Google", "IBM", "University B"] },
    { label: "Program", options: ["Degree", "Certification", "Short Course"] },
    { label: "Language", options: ["English", "Spanish", "French", "German"] },
    { label: "Availability", options: ["Available Now", "Starting Soon", "Self-Paced"] },
    { label: "Learning Type", options: ["Online", "Hybrid", "In-Person"] },
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.container}>
          <div className={styles.searchFilterWrapper}>
            
            <div className={styles.searchBarContainer}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  placeholder="Search your favourite course" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search courses"
                />
                <button className={styles.searchSubmitBtn}>
                  Search
                </button>
              </div>
            </div>

            <div className={styles.filtersGrid}>
              {filters.map((filter, index) => (
                <FilterDropdown 
                  key={index} 
                  label={filter.label} 
                  options={filter.options} 
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}