import React from 'react';
import styles from './CheckoutForm.module.scss';
import Image from 'next/image';
import paypal from '@/assets/icons/paypal.svg'
import americanexpress from '@/assets/icons/americanexpress.svg'
import visa from '@/assets/icons/visa.svg'
import classroom from '@/assets/images/common/classroom.jpg'

const CheckoutForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkoutContainer}>

        <div className={styles.paymentSide}>
          <h1 className={styles.mainTitle}>Checkout</h1>

          <div className={styles.formGroup}>
            <label>Cart Type</label>
            <div className={styles.cardSelector}>
              <div className={`${styles.cardIcon} ${styles.active}`}><Image src={paypal} alt="Paypal" width={139} height={92} /></div>
              <div className={styles.cardIcon}><Image src={americanexpress} alt="Amex" width={139} height={92} /></div>
              <div className={styles.cardIcon}><Image src={visa} alt="Visa" width={139} height={92} /></div>
              <div className={styles.cardIcon}><Image src={americanexpress} alt="Mastercard" width={139} height={92} /></div>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Name on Card</label>
            <input type="text" placeholder="Enter name on Card" />
          </div>
          <div className={styles.inputBox}>
            <label>Card Number</label>
            <input type="text" placeholder="Enter Card Number" />
          </div>

          <div className={styles.row}>
            <div className={styles.inputBox}>
              <label>Expiration Date ( MM/YY )</label>
              <input type="text" placeholder="Enter Expiration Date" />
            </div>
            <div className={styles.inputBox}>
              <label>CVC</label>
              <input type="text" placeholder="Enter CVC" />
            </div>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="saveInfo" />
            <label htmlFor="saveInfo">Save my information for faster checkout</label>
          </div>

          <button className={styles.confirmBtn}>Confirm Payment</button>
        </div>

        <div className={styles.summarySide}>
          <h3>Summary</h3>

          <div className={styles.itemList}>
            {[1, 2].map((item) => (
              <div key={item} className={styles.item}>
                <div className={styles.itemImg}>
                  <Image src={classroom} alt="course" width={160} height={107}/>
                </div>
                <div className={styles.itemDetails}>
                  <h4>adipiscing elit, sed do eiusmod tempor</h4>
                  <p>Lorem ipsum dolor...</p>
                  <span className={styles.price}>$24.69</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.calculations}>
            <div className={styles.calcRow}>
              <span>Subtotal</span>
              <span>$51.38</span>
            </div>
            <div className={styles.calcRow}>
              <span>Coupon Discount</span>
              <span>0 %</span>
            </div>
            <div className={styles.calcRow}>
              <span>TAX</span>
              <span>5</span>
            </div>
            <div className={`${styles.calcRow} ${styles.total}`}>
              <span>Total</span>
              <span>$56.38</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutForm;