import React from 'react'
import './timeline.css'
import HTMLIcon from '../icons/HTMLIcon'
import PHPIcon from '../icons/PHPIcon'
import SYMFONYIcon from "../icons/SYMFONYIcon"
import REACTIcon from "../icons/REACTIcon"
import CSHARPIcon from "../icons/CSHARPIcon"
import WORDPRESSIcon from "../icons/WORDPRESSIcon"
import JAVASCRIPTIcon from '../icons/JAVASCRIPTIcon'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Galery from "../galery/galery"
import imgAp1 from "../../assets/galery/test.png"
import imgAccueilAp2 from "../../assets/galery/localhost_PshychoQuiz_accueil.php.png"
import imgAdminAp2 from "../../assets/galery/localhost_PshychoQuiz_admin_.png"
import imgAdminQuestionAp2 from "../../assets/galery/localhost_PshychoQuiz_admin_questions.php.png"
import imgAdminStatsAp2 from "../../assets/galery/localhost_PshychoQuiz_admin_statistiques.php.png"
import imgQuizAp2 from "../../assets/galery/localhost_PshychoQuiz_quiz.php.png"
import imgResultatAp2 from "../../assets/galery/localhost_PshychoQuiz_resultat.php.png"
import imgLoginAp3 from "../../assets/galery/login.png"
import imgRapportsAp3 from "../../assets/galery/rapports.png"
import imgCommandeAp3 from "../../assets/galery/commande.png"
import imgCentreAp3 from "../../assets/galery/CentreRelaisColis.png"
import imgClientAp3 from "../../assets/galery/Client.png"
import imgParametreAp3 from "../../assets/galery/parametre.png"
import imgNotificationAp3 from "../../assets/galery/notification.png"
import soleilAlpha1 from "../../assets/galery/soleilalpha1.png"
import soleilAlpha2 from "../../assets/galery/soleilalpha2.png"
import soleilAlpha3 from "../../assets/galery/soleilalpha3.png"

export default function Timeline() {
  return (
    <div className='timeline' id='timeline'>
      <h2>TimeLine</h2>
      <VerticalTimeline lineColor='#000'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<HTMLIcon width={"50%"}/>}
          date='15/09/22 à 21/10/22'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">AP1 : Site internet des métiers</h3>
          <p>
            Création d'un site web statique de manière individuel dans le but de présenter un métier de l'informatique.
          </p>
          <Galery>
            <img src={imgAp1} className='imgGalery' style={{aspectRatio: "9/16"}} alt="image du projet Site internet des métiers" title="image du projet Site internet des métiers"/>
          </Galery>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<HTMLIcon width={30}/>}
          date='10/11/22 à 16/12/22'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">AP1 regroupement de tous les Sites internet des métiers</h3>
          <p>
            Création d'un site web statique en groupe dans le but de regrouper tous les sites web de tous les groupes de la classe de BTS SIO pour les visionner et les trier par catégorie.
          </p>
          <Galery>
          </Galery>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<PHPIcon width={"60%"}/>}
          date='05/01/23 à 14/04/23'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">AP2 PsychoQuiz : Site de quiz </h3>
          <p>
            Création d'un site web dynamique dans le but de créer une partie avec un quiz pour choisir entre réseau ou développement et une partie administrateur.
          </p>
          <Galery>
            <img src={imgAccueilAp2} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de l'accueil du projet PshychoQuiz" title="image de l'accueil du projet PshychoQuiz" />
            <img src={imgQuizAp2} className='imgGalery' style={{aspectRatio: "9/16"}} alt="image de la page quiz du projet PshychoQuiz" title="image de la page quiz du projet PshychoQuiz"/>
            <img src={imgResultatAp2} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page resultat du projet PshychoQuiz" title="image de la page resultat du projet PshychoQuiz"/>
            <img src={imgAdminAp2} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page de login admin du projet PshychoQuiz" title="image de la page login admin du projet PshychoQuiz"/>
            <img src={imgAdminStatsAp2} className='imgGalery' style={{aspectRatio: "9/16"}} alt="image de la page statistiques du projet PshychoQuiz" title="image de la page statistiques du projet PshychoQuiz"/>
            <img src={imgAdminQuestionAp2} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page admin des questions du projet PshychoQuiz" title="image de la page admin desd questions du projet PshychoQuiz"/>
          </Galery>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<WORDPRESSIcon width={"60%"}/>}
          date='30/05/23 à 01/07/23'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">Stage Première Année : Jérôme Perrot</h3>
          <p>
            Apprentissage et création de pages wordpress.
          </p>
          <Galery>
            <img src={soleilAlpha1} className='imgGalery' style={{aspectRatio: "9/16"}} alt="image d'une page fait avec le builder Divi" title="image d'une page fait avec le builder Divi" />
            <img src={soleilAlpha2} className='imgGalery' style={{aspectRatio: "9/16"}} alt="image du builder Divi" title="image du builder Divi"/>
            <img src={soleilAlpha3} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image d'une page wordpress" title="image d'une page wordpress"/>
          </Galery>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<SYMFONYIcon width={"60%"}/>}
          date='04/09/23 à 19/12/23'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">AP3 Application de gestion de la logistique de colis</h3>
          <p>
            Création d'un site web dynamique dans le but de développer une application de gestion de colis pour optimiser les livraisons directes et via des centres de relais équipés de casiers intelligents.
          </p>
          <Galery>
            <img src={imgLoginAp3} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de l'accueil du projet PshychoQuiz" title="image de l'accueil du projet PshychoQuiz" />
            <img src={imgRapportsAp3} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page quiz du projet PshychoQuiz" title="image de la page quiz du projet PshychoQuiz"/>
            <img src={imgCommandeAp3} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page resultat du projet PshychoQuiz" title="image de la page resultat du projet PshychoQuiz"/>
            <img src={imgCentreAp3} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page de login admin du projet PshychoQuiz" title="image de la page login admin du projet PshychoQuiz"/>
            <img src={imgClientAp3} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page statistiques du projet PshychoQuiz" title="image de la page statistiques du projet PshychoQuiz"/>
            <img src={imgParametreAp3} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page admin des questions du projet PshychoQuiz" title="image de la page admin desd questions du projet PshychoQuiz"/>
            <img src={imgNotificationAp3} className='imgGalery' style={{aspectRatio: "16/9"}} alt="image de la page admin des questions du projet PshychoQuiz" title="image de la page admin desd questions du projet PshychoQuiz"/>
          </Galery>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center" , border: "4px solid black"}}
          icon={<REACTIcon width={"70%"}/>}
          date='30/11/23 à PAS FINI'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">Mise en place d'un portfolio</h3>
          <p>
            Création d'un portfolio de manière individuel dans le but de retracer le parcour de proffessionnalisation et décrit les réalisations professionnelles élaborées au
            cours de la formation et l‟acquisition des compétences décrites dans le bloc de compétences « Support et mise à
            disposition de services informatiques ».
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<JAVASCRIPTIcon width={"50%"}/>}
          date='08/01/23 à 24/02/24'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">Stage Deuxième Année : Exail Robotics</h3>
          <p>
            Travail sur une api javascript pour faire le lien entre un formulaire et un environement 3D.
          </p>
          <Galery>
            <p>à rajouter par la suite</p>
          </Galery>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<CSHARPIcon width={"60%"}/>}
          date='PAS ENCORE DE DATE'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">AP4 pas encore fait</h3>
          <p>
            Et bas ducoup je sais pas.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
