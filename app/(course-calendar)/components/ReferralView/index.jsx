import Image from "next/image";

const ReferralView = () => (
    <div className="view-container fade-in">
        <section className="intro-text">
            <h2>Share and refer</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit.</p>
        </section>

        <div className="referral-list">
            {[1, 2, 3].map(i => (
                <div key={i} className="referral-card">
                    <div className="card-header">
                        <h3>O6 Super Coins on the way</h3>
                        <div className="social-icons"> 
                            <Image src="/images/twitter (1).svg" alt="" height={20} width={20}/>
                            <Image src="/images/facebook (1).svg" alt="" height={20} width={20}/>
                            <Image src="/images/youtube.svg" alt="" height={20} width={20}/>
                            <Image src="/images/instagram.svg" alt="" height={20} width={20}/>
                            <Image src="/images/telegram.svg" alt="" height={20} width={20}/>
                            <Image src="/images/whatsapp.svg" alt="" height={20} width={20}/>
                        </div>
                    </div>
                    <p className="card-subtitle">Lorem ipsum dolor sit amet, consectetur adi</p>
                    <div className={`referral-content ${i === 2 ? 'highlighted' : ''} ${i === 3 ? 'pink-bg' : ''}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodL.</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ReferralView;