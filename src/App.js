import React from 'react'

import heroIllustration from './images/landing/hero_illustration.svg'
import logo from './images/landing/logo.svg'
import logoNoText from './images/landing/logo_no_text.svg'
import { Btn, FlexRow, Image, MountableComponent, Dialog, Label} from './_components'
import breakpoints from './_styling/breakpoints'
import { fonts } from './_styling/fonts'
import { colors } from './_styling'
import slackLogo from './images/landing/brands/slack.svg'
import fortnoxLogo from './images/landing/brands/fortnox.png'
import gSuiteLogo from './images/landing/brands/g_suite.svg'
import voiLogo from './images/landing/brands/voi_logo.svg' 
import zoundLogo from './images/landing/brands/zound_logo.png'
import bokioLogo from './images/landing/brands/bokio_logo.png'
import arrowTab from './images/landing/alexis_tab.png'
import bubblesBg from './images/landing/bubbles_bg.svg'
import plansBg from './images/landing/plans/plans_bg.svg'
import { TabbedContent } from './_components/TabbedContent'
import dashboardIcon from './images/icons/dashboard_active.svg'
import companyIcon from './images/icons/company_active.svg'
import teamIcon from './images/icons/team_active.svg'
import checklistsIcon from './images/icons/checklists_active.svg'
import timeOffIcon from './images/icons/time_off_active.svg'
import documentsIcon from './images/icons/documents_active.svg'
import profileIcon from './images/icons/profile_active.svg'
import reportsIcon from './images/icons/reports_active.svg'
import featureDashboard from './images/landing/features/dashboard.png'
import featureProfile from './images/landing/features/profile.png'
import featureTimeOff from './images/landing/features/time_off.png'
import featureDocuments from './images/landing/features/documents.png'
import featureChecklists from './images/landing/features/checklists.png'
import featurePeople from './images/landing/features/people.png'
import featureCompany from './images/landing/features/company.png'
import featureReports from './images/landing/features/reports.png'
import planFeatureChecked from './images/landing/plans/feature_checked.svg'
import planFeatureUnchecked from './images/landing/plans/feature_unchecked.svg'
import planFree from './images/landing/plans/free.svg'
import premiumPlan from './images/landing/plans/premium.png'
import planPlus from './images/landing/plans/plus.svg'
import signUpBg from './images/landing/sign_up_bg.svg'
import footerBg from './images/landing/footer_bg.svg'
import styled from 'styled-components'


// const breakpointDesktop = '1440px'

const Wrapper = styled.div`
  background: #fff;
  overflow: hidden;
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 30px;
  img:nth-of-type(2) {
    display: none;
  }
  > div {
    display: flex;
    justify-content: space-between;
    button:first-of-type {
      background: #e5f2f6;
      border-color: #e5f2f6;
      color: #007da7;
      &:hover {
        background: #c1dde6;
        border-color: #c1dde6;
      }
    }
    button:nth-of-type(2) {
      background: #007da7;
      border-color: #007da7;
      color: #fff;
      &:hover {
        background: #004e69;
        border-color: #004e69;
      }
    }
  }
  @media (max-width: ${breakpoints.MOBILE}) {
    margin: 0;
    img:nth-of-type(1) {
      display: none;
    }
    img:nth-of-type(2) {
      display: inline-block;
    }
    button:nth-of-type(2) {
      display: none;
    }
  }
`

const Hero = styled.div`
  position: relative;
  h1 {
    margin: 0;
    color: ${colors.BLUE_GRAY};
    font: 600 44px ${fonts.HEADING};
  }
  p {
    margin: 28px 0 0;
    color: #666e83;
    font: 18px ${fonts.MAIN};
    line-height: 2;
  }
  .hero-illustration {
    flex: 1.5;
    margin-top: 60px;
    img {
      width: 100%;
      height: 610px;
      transform: translateX(80px);
    }
  }
  @media (max-width: 1140px) {
    padding: 30px 0 60px;
    .hero-illustration {
      flex: 1;
      img {
        height: auto;
      }
    }
  }
  @media (max-width: ${breakpoints.MOBILE}) {
    padding-bottom: 20px;
    text-align: center;
    .hero-illustration {
      width: 100%;
      img {
        transform: none;
      }
    }
    .arrow-tab {
      display: none;
    }
    h1 {
      font-size: 32px;
    }
    p {
      margin: 20px 0 0;
      font-size: 16px;
    }
  }
`

const HeroInner = styled(Inner)`
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.MOBILE}) {
    display: block;
  }
`

const RequestInvite = styled.div`
  display: flex;
  margin: 32px 0 0;
  input {
    flex: 1;
    width: 250px;
    height: 50px;
    margin: 0 -25px 0 0;
    padding: 0 30px;
    border: none;
    border-radius: 25px 0 0 25px;
    background: #f0f0f0;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease-in-out;
    &:focus {
      background: #ebecf0;
    }
    @media (max-width: ${breakpoints.MOBILE}) {
      padding: 0 20px;
    }
  }
`

const Integrations = styled.div`
  margin: 0 auto;
  padding: 50px 30px 30px;
  background: #e8f6fa;
  text-align: center;
  h2 {
    margin: 0 0 10px;
    font: 400 20px ${fonts.MAIN};
    color: #666e83;
  }
  img {
    margin: 20px;
  }
`

const Features = styled.div`
  margin: -60px 0 0;
  padding: 60px 30px 0;
  text-align: center;
  background: url(${bubblesBg}) center top no-repeat;
  .feature-illustration {
    width: 644px;
    height: 518px;
    margin: 20px -180px 0px 60px;
  }
  @media (max-width: ${breakpoints.MOBILE}) {
    margin: 0;
    .feature-illustration {
      display: none;
    }
  }
`

const TabContainer = styled.div`
  margin: 50px 0 180px;
  @media (max-width: ${breakpoints.MOBILE}) {
    margin: 60px 0;
  }
`

const Plans = styled.div`
  margin: 150px 0 0;
  padding: 0 20px 120px;
  background: url(${plansBg}) center top no-repeat,
    linear-gradient(to left, #8182f1, #75bae1);
  @media (max-width: ${breakpoints.MOBILE}) {
    margin: 20px 0 0;
    padding: 40px 20px;
  }
`

const FeaturesList = styled.ul`
  flex: 1;
  list-style: none;
  margin: 188px 0 0;
  padding: 0;
  color: #fff;
  font-size: 20px;
  li {
    display: flex;
    align-items: center;
    height: 72px;
    margin: 0;
  }
  @media (max-width: ${breakpoints.MOBILE}) {
    margin: 140px 0 0;
    font-size: 14px;
    li {
      height: 52px;
      margin: 0;
    }
  }
`

const Plan = styled.div`
  width: 240px;
  margin: -45px 0 0;
  border-top: 1px solid #f7f7f7;
  border-radius: 12px;
  text-align: center;
  background: #fff;
  box-shadow: 0 20px 94px rgba(40, 59, 78, 0.1);
  transform: ${props => (props.featured ? 'scale(1.1)' : 'none')};
  position: relative;
  .plan-illustration {
    width: 120px;
    height: 80px;
    margin: 0 auto 10px;
  }
  @media (max-width: ${breakpoints.MOBILE}) {
    width: 100px;
    margin: ${props => (props.featured ? '0 0 0 1px' : '0')};
    border-radius: 6px;
    transform: none;
    .plan-illustration {
      width: 81px;
      height: 54px;
    }
    p {
      display: none;
    }
  }
`

const PlanPrice = styled.div`
  margin: 10px 0 20px;
  font: 600 13px ${fonts.MAIN};
  color: ${colors.BLUE_GRAY};
  @media (max-width: ${breakpoints.MOBILE}) {
    font-size: 10px;
  }
`

const FeatureItem = styled.div`
  padding: 25px 0;
  background: ${props => (props.even ? '#F4F6F8' : 'trasparent')};
  @media (max-width: ${breakpoints.MOBILE}) {
    padding: 15px 0;
  }
`

const SectionHeading = styled.h2`
  margin: 100px 0 0;
  color: ${colors.BLUE_GRAY};
  font: 600 36px ${fonts.HEADING};
  text-align: center;
  @media (max-width: ${breakpoints.MOBILE}) {
    margin: 40px 0 0;
    font-size: 30px;
  }
`

const SectionDescription = styled.p`
  margin: 24px 0 0;
  color: #666e83;
  font: 18px/1.8 ${fonts.MAIN};
  text-align: center;
  @media (max-width: ${breakpoints.MOBILE}) {
    font-size: 16px;
  }
`

const Divider = styled.div`
  width: 68px;
  height: 5px;
  margin: 70px auto 0;
  background: rgba(38, 172, 213, 0.3);
  @media (max-width: ${breakpoints.MOBILE}) {
    margin-top: 0;
  }
`

const SignUpWrapper = styled.div`
  margin: 40px 0;
  padding: 20px;
  background: url(${signUpBg}) top center no-repeat;
  @media (max-width: ${breakpoints.MOBILE}) {
    margin: 20px 0;
    h2 {
      font-size: 28px;
    }
    p {
      margin: 8px;
      font-size: 16px;
    }
  }
`

const Footer = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: #fff;
  font-weight: 400;
  display: block;
  font-style: italic;
  font-size: 16px;
  background: url(${footerBg}) center 10px no-repeat,
    linear-gradient(-9deg, #323382 0%, #856c9c 100%);
  span {
    font-style: normal;
    font-size: 22px;
    margin-left: 5px;
  }
`

const ContentWrapper = styled(FlexRow)`
  margin: 0 60px 0 80px;
  text-align: left;
  h3 {
    margin: 36px 0 0;
    color: ${colors.BLUE_GRAY};
    font: 600 36px ${fonts.HEADING};
  }
  p {
    margin: 16px 0 0;
    color: #666e83;
    font-size: 17px;
    line-height: 1.5;
  }
  @media (max-width: ${breakpoints.MOBILE}) {
    margin: 0 10px;
    h3 {
      margin: 0;
      font-size: 26px;
    }
    p {
      margin: 8px 0 0;
      font-size: 15px;
    }
  }
`

const features = [
  {
    icon: dashboardIcon,
    title: 'Översikt',
    content: (
      <ContentWrapper>
        <div style={{ flex: '1' }}>
          <h3>Översikt</h3>
          <p>
            Missa aldrig viktiga uppgifter, deadlines eller events. Ha full koll
            på födelsedagar, årsdagar och julfester. Notifikationer säkerställer
            att du alltid är uppdaterad och informerad om det viktigaste.
          </p>
        </div>
        <Image src={featureDashboard} className="feature-illustration" />
      </ContentWrapper>
    )
  },
  {
    icon: profileIcon,
    title: 'Profil',
    content: (
      <ContentWrapper>
        <div style={{ flex: '1' }}>
          <h3>Profil</h3>
          <p>
            Hantera all information som rör din anställning på en plats. Här
            kommer du åt allt från anställningsinformation till viktiga
            dokument.
          </p>
        </div>
        <Image src={featureProfile} className="feature-illustration" />
      </ContentWrapper>
    )
  },
  {
    icon: timeOffIcon,
    title: 'Frånvaro',
    content: (
      <ContentWrapper>
        <div style={{ flex: '1' }}>
          <h3>Frånvaro</h3>
          <p>
            En översikt på vem som är var och när. Automatiserad hantering av
            semesterplanering, sjukdagar, VAB och ledigheter. Gör det enkelt för
            dig och dina medarbetare att hantera frånvaro.
          </p>
        </div>
        <Image src={featureTimeOff} className="feature-illustration" />
      </ContentWrapper>
    )
  },
  {
    icon: documentsIcon,
    title: 'Dokument',
    content: (
      <ContentWrapper>
        <div style={{ flex: '1' }}>
          <h3>Dokument</h3>
          <p>
            Undvik att dela ut papper och jaga signaturer. Organisera alla
            dokument såsom personalhandbok, policies, anställningsavtal och ID:n
            på en säker plats. Snabbt, enkelt och tillgängligt för de som
            behöver.
          </p>
        </div>
        <Image src={featureDocuments} className="feature-illustration" />
      </ContentWrapper>
    )
  },
  {
    icon: checklistsIcon,
    title: 'Checklistor',
    content: (
      <ContentWrapper>
        <div style={{ flex: '1' }}>
          <h3>Checklistor</h3>
          <p>
            Fördela uppgifter, sätt deadlines och se vem som ansvarar för vad,
            samtidigt som du följer processen och tack vare notifikationer
            snabbt kan korrigera eventuella brister.
          </p>
        </div>
        <Image src={featureChecklists} className="feature-illustration" />
      </ContentWrapper>
    )
  },
  {
    icon: teamIcon,
    title: 'Kollegor',
    content: (
      <ContentWrapper>
        <div style={{ flex: '1' }}>
          <h3>Kollegor</h3>
          <p>
            All personaldata på en plats. Se organisationskarta,
            användarprofiler och vem som gör vad. Alltid uppdaterad information
            om medarbetare. Tryggt, centralt och gemensamt.
          </p>
        </div>
        <Image src={featurePeople} className="feature-illustration" />
      </ContentWrapper>
    )
  },
  {
    icon: companyIcon,
    title: 'Företaget',
    content: (
      <ContentWrapper>
        <div style={{ flex: '1' }}>
          <h3>Ditt företag</h3>
          <p>
            Enkel och strukturerad informationsinsamling om framtida kollegor.
            Delegera uppgifter via checklistor. Ge nyanställda en positiv första
            upplevelse av sin nya arbetsplats, roll och kollegor.
          </p>
        </div>
        <Image src={featureCompany} className="feature-illustration" />
      </ContentWrapper>
    )
  },
  {
    icon: reportsIcon,
    title: 'Rapporter',
    content: (
      <ContentWrapper>
        <div style={{ flex: '1' }}>
          <h3>Rapporter</h3>
          <p>
            Undvik manuellt och tidskrävande arbete. Generera automatiska
            rapporter till exempelvis lönebyrå eller SCB. Plocka fram
            avvikelserapporter och insikter. Allt du vill, när du vill.
          </p>
        </div>
        <Image src={featureReports} className="feature-illustration" />
      </ContentWrapper>
    )
  }
]

export default class Landing extends MountableComponent {
  state = {
    requestInviteEmail: ''
  }

  requestAccessInput = React.createRef()

  focusRequestAccessInput = () => {
    this.requestAccessInput.current.focus()

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  componentDidMount() {
    super.componentDidMount()

    const viewportMeta = document.getElementById('viewportMeta')
    viewportMeta.setAttribute(
      'content',
      'width=device-width, initial-scale=1, shrink-to-fit=no'
    )
  }

  componentWillUnmount() {
    super.componentWillUnmount()

    const viewportMeta = document.getElementById('viewportMeta')
    viewportMeta.setAttribute('content', '')
  }

  renderHeader() {
          return (
            <Header>
              <img src={logo} alt="Alexis HR" width="230px" />
              <img src={logoNoText} alt="Alexis HR" />
              <div>
                <Btn
                  small
                  primary
                  
                >
                  LOGGA IN
                </Btn>
                <Btn
                  small
                  
                  style={{ marginLeft: '20px' }}
                >
                  BOKA DEMO
                </Btn>
              </div>
            </Header>
          )
  }

  renderHero() {
    return (
      <Hero>
        <HeroInner>
          <div style={{ flex: '1' }}>
            <h1>HR för det moderna företaget.</h1>
            <p>
              Samla all din HR-data på ett ställe. Automatisera administration.
              Anpassat för små- och mellanstora företag som jobbar digitalt.
            </p>
            {this.renderRequestInviteForm()}
          </div>
          <div className="hero-illustration">
            <Image src={heroIllustration} />
          </div>
        </HeroInner>
        <Image
          width="500px"
          height="74px"
          src={arrowTab}
          className="arrow-tab"
          style={{
            position: 'absolute',
            bottom: '0',
            left: 'calc(50% - 250px)',
          }}
        
        />
      </Hero>
    )
  }

  renderRequestInviteForm() {
    return (
      <RequestInvite id="request-invite">
        <input
          type="text"
          placeholder="Din e-postadress"
          ref={this.requestAccessInput}
          value={this.state.requestInviteEmail}
          onChange={e => {
            this.setState({
              requestInviteEmail: e.target.value
            })
          }}
        />
        <Btn
          positive
          style={{ height: '50px' }}
          
        >
          Boka demo
        </Btn>
      </RequestInvite>
    )
  }

  renderIntegrations() {
    return (
      <Integrations>
        <h2 id="scroll">Används av</h2>   
        <Image src={zoundLogo} width="140px" alt="Zound Industries" />
        <Image src={voiLogo} width="120px" alt="Voi Technology" />
        <Image src={bokioLogo} width="100px" alt="Bokio AB" />
      </Integrations>
    )
  }

  renderIntegrations2() {
    return (
      <Integrations>
        <h2>Integrerat med</h2>
        <Image src={gSuiteLogo} width="120px" />
        <Image src={slackLogo} width="140px" />
        <Image src={fortnoxLogo} width="100px" />
      </Integrations>
    )
  }

  renderFeatures() {
    return (
      <Features>
        <Inner>
          <Divider />
          <SectionHeading>
            Fokus på människor, inte administration.
          </SectionHeading>
          <SectionDescription>
            Alexis förvandlar timmar av manuell administration till minuter
            genom att automatisera uppgifter och samla all personalhantering på
            ett ställe.
          </SectionDescription>
          <TabContainer>
            <TabbedContent items={features} />
          </TabContainer>
          <Divider />
        </Inner>
      </Features>
    )
  }

  renderPlan(name, icon, description, price, features, featured = false) {
    return (
      <Plan featured={featured}>
        <SectionHeading style={{ margin: '30px 0 10px', fontSize: '26px' }}>
          {name}
        </SectionHeading>
        <div className="plan-illustration">
          <Image src={icon} width="100%" />
        </div>
        <SectionDescription style={{ margin: '10px 10px 0', fontSize: '13px' }}>
          {description}
        </SectionDescription>
        <PlanPrice>{price}</PlanPrice>
        {features.map((on, index) => {
          return (
            <FeatureItem key={index} even={index % 2 === 0}>
              <Image
                src={on ? planFeatureChecked : planFeatureUnchecked}
                width="20px"
                height="12px"
              />
            </FeatureItem>
          )
        })}
        {featured && (
          <Label
            style={{
              height: '40px',
              position: 'absolute',
              left: '0',
              right: '0',
              bottom: '-75px',
              textAlign: 'center',
              color: '#fff',
              fontSize: '11px',
              fontWeight: '400'
            }}
          >
            * alla priser är exklusive moms
          </Label>
        )}
        { <Btn
          positive
          style={{
            transform: 'translateY(0px)',
            boxShadow: 'none'
          }}
        >
          Välj plan
        </Btn> }
      </Plan>
    )
  }

  renderPlans() {
    return (
      <>
        <Inner>
          <SectionHeading>Våra planer</SectionHeading>
          <SectionDescription>
            Alexis passar både stora och små företag – välj den plan som passar
            just dig bäst.
          </SectionDescription>
        </Inner>
        <Plans>
          <FlexRow style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FeaturesList>
              <li>10+ anställda</li>
              <li>Personalregister</li>
              <li>Frånvarohantering</li>
              <li>Dokument</li>
              <li>Statistik</li>
              <li>Rapporter</li>
              <li>Anpassad integration</li>
            </FeaturesList>
            {this.renderPlan(
              'Basic',
              planFree,
              'Perfekt för små företag med under 10 anställda.',
              '49 SEK/mån per anställd*',
              [0, 1, 1, 0, 0, 1, 0]
            )}
            {this.renderPlan(
              'Plus',
              planPlus,
              'För lite större företag som vill förenkla sin administration.',
              '69 SEK/mån per anställd*',
              [1, 1, 1, 1, 1, 1, 0],
              true
            )}
            {this.renderPlan(
              'Premium',
              planPlus,
              'För stora företag som vill förenkla sin administration.',
              'Fråga oss om pris!',
              [1, 1, 1, 1, 1, 1, 1],
              
            )}
          </FlexRow>
        </Plans>
      </>
    )
  }
  renderSignUp() {
    return (
      <SignUpWrapper>
        <SectionHeading style={{ marginTop: '0' }}>
          Vill du se en demo?
        </SectionHeading>
        <SectionDescription>
          Fyll i din e-postadress så kontaktar vi dig och bokar in en tid.
        </SectionDescription>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          {this.renderRequestInviteForm()}
        </div>
      </SignUpWrapper>
    )
  }

  renderFooter() {
    return (
      <Footer>
        Alexis är en närproducerad plattform, skapad med kärlek i Sverige{' '}
        <span>❤</span>
      </Footer>
    )
  }

  render() {
    
      

          return (
            <Wrapper>
              
              {this.renderHeader()}
              {this.renderHero()}
              {this.renderIntegrations()}
              {this.renderFeatures()}
              {this.renderIntegrations2()}
              {this.renderPlans()}
              {this.renderSignUp()}
              {this.renderFooter()}
            </Wrapper>
          )

   
  }
}
  
