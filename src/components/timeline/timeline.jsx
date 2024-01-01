import React from 'react'
import './timeline.css'
import HTMLIcon from '../icons/HTMLIcon'
import PHPIcon from '../icons/PHPIcon'
import SYMFONYIcon from "../icons/SYMFONYIcon"
import REACTIcon from "../icons/REACTIcon"
import CSHARPIcon from "../icons/CSHARPIcon"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Timeline() {
  return (
    <div className='timeline' id='timeline'>
      <h2>TimeLine</h2>
      <VerticalTimeline lineColor='#000'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<HTMLIcon width={30}/>}
          date='15/09/22 à 21/10/22'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">AP1 : Site internet des métiers</h3>
          <p>
            Création d'un site web statique de manière individuel dans le but de présenter un métier de l'informatique.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
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
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<PHPIcon width={35}/>}
          date='05/01/23 à 14/04/23'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">AP2 PsychoQuiz : Site de quiz </h3>
          <p>
            Création d'un site web dynamique dans le but de créer une partie avec un quiz pour choisir entre réseau ou développement et une partie administrateur.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center", border: "4px solid black"}}
          icon={<SYMFONYIcon width={30}/>}
          date='04/09/23 à 19/12/23'
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          contentStyle={{backgroundColor: "#000", color: "#fff", boxShadow: "none"}}
          dateClassName={ "date" }
        >
          <h3 className="vertical-timeline-element-title">AP3 Application de gestion de la logistique de colis</h3>
          <p>
            Création d'un site web dynamique dans le but de développer une application de gestion de colis pour optimiser les livraisons directes et via des centres de relais équipés de casiers intelligents.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work date' 
          iconStyle={{ background: '#fff', boxShadow: 'none', display: "flex", justifyContent: "center", alignItems: "center" , border: "4px solid black"}}
          icon={<REACTIcon width={35}/>}
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
          icon={<CSHARPIcon width={35}/>}
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
