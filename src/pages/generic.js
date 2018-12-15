import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>On Ne Lache Rien</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>As freelance sales agent of O’Neill wetsuits I managed to increase the salesresults with 80%. By ordering directly through the UK instead of the US our margin increased with 25 %. I scheduled a more effective delivery window and negociated more competitive retail prices.</p>
                    <p>As sales manager I designed a datawarehouse with online intranet reports real-time sales evolution, margins, stock, deliveries, ... Reporting directly to the CEO’s with up to date sales reports.</p>
                    <p>I was an active member of the ICT (Image Control Team). Our team’s input resulted in new flagship stores, core events and a cutting-edge marketing and public relations strategy.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
