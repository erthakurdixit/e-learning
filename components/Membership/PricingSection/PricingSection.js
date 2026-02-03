import React from 'react';
import styles from './PricingSection.module.scss';
import { FiUser, FiUsers, FiAward } from 'react-icons/fi';
import PricingCard from '../PricingCard/PricingCard';

export const pricingPlans = [
  {
    id: 'free',
    planName: 'Like a pussy',
    icon: <FiUser />,
    price: 'Free',
    period: '/ FOREVER',
    features: [
      'Components-driven system',
      'Sales-boosting landing pages',
      'Awesome Feather icons pack',
    ],
    buttonText: 'Try for free',
    isPopular: false,
    accentColor: 'grey',
  },
  {
    id: 'individual',
    planName: 'Individual',
    icon: <FiAward />,
    price: '$24',
    period: '/ MONTH',
    badge: 'BEST!',
    features: [
      'Components-driven system',
      'Sales-boosting landing pages',
      'Awesome Feather icons pack',
      'Themed into 3 different styles',
      'Will help to learn Figma',
    ],
    buttonText: 'Regular license',
    isPopular: true,
    accentColor: 'orange',
  },
  {
    id: 'corporate',
    planName: 'Corporate',
    icon: <FiUsers />,
    price: '$12',
    period: '/ EDITOR',
    features: [
      'Components-driven system',
      'Sales-boosting landing pages',
      'Awesome Feather icons pack',
      'Themed into 3 different styles',
    ],
    buttonText: 'Extended license',
    isPopular: false,
    accentColor: 'teal',
  },
];

const PricingSection = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Affordable pricing</h2>
        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;