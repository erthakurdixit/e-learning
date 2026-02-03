import Image from "next/image";
import styles from "./AllInOneSoftware.module.scss";
import invoiceIcon from "@/assets/icons/invoice.svg";
import callender from "@/assets/icons/callender.svg";
import users from "@/assets/icons/users.svg";
const FEATURES = [
    {
        title: "Online Billing,\nInvoicing, & Contracts",
        description:
            "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
        icon: <Image src={invoiceIcon} alt="invoice icon" width={48} height={48} />,
        variant: "billing",
    },
    {
        title: "Easy Scheduling &\nAttendance Tracking",
        description:
            "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
        icon: <Image src={callender} alt="invoice icon" width={48} height={48} />,
        variant: "schedule",
    },
    {
        title: "Customer Tracking",
        description:
            "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
        icon: <Image src={users} alt="invoice icon" width={48} height={48} />,
        variant: "customer",
    },
];

export default function AllInOneSoftware() {
    return (
        <section className={styles.allInOne}>
            <header className={styles.header}>
                <h2>
                    All-In-One <span>Cloud Software.</span>
                </h2>
                <p>
                    TOTC is one powerful online software suite that combines all the tools
                    needed to run a successful school or office.
                </p>
            </header>

            <div className={styles.cards}>
                {FEATURES.map((item) => (
                    <article
                        key={item.title}
                        className={`${styles.card} ${styles[item.variant]}`}
                    >
                        <div className={styles.icon}>{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
