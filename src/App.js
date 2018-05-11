import React, { Component } from 'react';
import Icons from './components/icons';
import Icon from './components/icon';
import Newsletter from './components/newsletter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="homepage">
        <Icons />
        <div className="splash">
          <div className="wrapper">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <section className="c-box -primary">
                  <div className="splash-box">
                    <h1>Global Flood Protection <br />Cost-Benefit Analyzer</h1>
                    <h2>An open source tool that quantifies the costs and benefits of implementing flood protection strategies worldwide</h2>

                    <div className="newsletter-container">
                      <span>Coming soon. Sign up for updates:</span>
                      <div className="row">
                        <div className="col-xs-12 col-md-6">
                          <Newsletter />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="wrapper">
            <div className="row equal-height">
              <div className="col-xs-12 col-md-6">
                <section className="c-box -secondary">
                  <h2>Cost-benefit analysis</h2>
                  <div className="description">Benefits calculated based on risk metrics developed using a probabilistic approach.</div>
                  <div className="icon-container">
                    <Icon name="money-bag" />
                  </div>
                </section>
              </div>
              <div className="col-xs-12 col-md-6">
                <section className="c-box -secondary">
                  <h2>High spatial resolution</h2>
                  <div className="description">30 arc-second resolution hazard maps with global coverage.</div>
                  <div className="icon-container">
                    <Icon name="space-station" />
                  </div>
                </section>
              </div>
              <div className="col-xs-12 col-md-6">
                <section className="c-box -secondary">
                  <h2>Existing protection standards</h2>
                  <div className="description">Existing local flood protection standards included.</div>
                  <div className="icon-container">
                    <Icon name="antivirus" />
                  </div>
                </section>
              </div>
              <div className="col-xs-12 col-md-6">
                <section className="c-box -secondary">
                  <h2>Future projections</h2>
                  <div className="description">Future risks captured taking climate change and socio-economic change into account.</div>
                  <div className="icon-container">
                    <Icon name="analytics" />
                  </div>
                </section>
              </div>
              <div className="col-xs-12 col-md-8">
                <section className="c-box -primary">
                  <h2>Sign up for updates</h2>
                  <div className="row">
                    <div className="col-xs-12 col-md-8">
                      <div className="newsletter-container">
                        <Newsletter />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-xs-12 col-md-4">
                <section className="c-box -secondary">
                  <h2>Contact us</h2>
                  <div className="description">For data, partnership, and collaboration inquiries about the
                    Global Flood Protection Cost-Benefit Analyzer, contact <a href="mailto:tianyi.luo@wri.org">Tianyi Luo.</a>
                  </div>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="credits">
                  <p>Icons made by mynamepong, Freepik and Smashicons from&nbsp;
                    <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="wrapper">
            <div className="members -funders">
              <h2>Funders</h2>
              <ul className="logo-list">
                <li>
                  <a href="http://www.worldbank.org/" target="_blank" rel="noreferrer noopener">
                    <img className="-world-bank" src="/static/images/logos/world-bank.png" alt="World Bank" />
                  </a>
                </li>
                <li>
                  <a href="https://www.government.nl/" target="_blank" rel="noreferrer noopener">
                    <img className="-government-netherlands" src="/static/images/logos/government-netherlands.png" alt="Government of the Netherlands" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="members -partners">
              <h2>Partners</h2>
              <ul className="logo-list">
                <li>
                  <a href="http://www.wri.org/" target="_blank" rel="noreferrer noopener">
                    <img className="-wri" src="/static/images/logos/wri.png" alt="World Resources Institute" />
                  </a>
                </li>
                <li>
                  <a href="https://www.deltares.nl/en/" target="_blank" rel="noreferrer noopener">
                    <img className="-deltares" src="/static/images/logos/deltares.png" alt="Deltares" />
                  </a>
                </li>
                <li>
                  <a href="https://www.ivm.vu.nl/en/index.aspx" target="_blank" rel="noreferrer noopener">
                    <img className="-ivm-vu" src="/static/images/logos/ivm-vu.png" alt="IVM | Institute for Environmental Studies" />
                  </a>
                </li>
                <li>
                  <a href="https://www.uu.nl/en" target="_blank" rel="noreferrer noopener">
                    <img className="-utrecht-university" src="/static/images/logos/utrecht-university.png" alt="Utrecht University" />
                  </a>
                </li>
                <li>
                  <a href="http://www.pbl.nl/" target="_blank" rel="noreferrer noopener">
                    <img className="-pbl" src="/static/images/logos/pbl.png" alt="PBL Netherlands Environmental Assessment Agency" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
