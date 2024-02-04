import React from 'react'
import './skills.css'

import CSHARPIcon from '../icons/CSHARPIcon'
import GITHUBIcon from '../icons/GITHUBIcon'
import HTMLIcon from '../icons/HTMLIcon'
import PHPIcon from '../icons/PHPIcon'
import SYMFONYIcon from '../icons/SYMFONYIcon'
import JAVASCRIPTIcon from '../icons/JAVASCRIPTIcon'
import CSSIcon from '../icons/CSSIcon'
import VUEJSIcon from '../icons/VUEJSICon'
import VIRTUALBOXIcon from '../icons/VIRTUALBOXIcon'
import LINUXIcon from '../icons/LINUXIcon'
import BASHIcon from '../icons/BASHIcon'
import CISCOIcon from '../icons/CISCOIcon'

export default function Skills() {
  return (
    <div className='skills' id='skills'>
        <h2>Compétences</h2>
        <table>
            <tr id='devRow'>
                <th>Développement</th>
                <td><CSHARPIcon width={'40px'} /></td>
                <td><GITHUBIcon height={'40px'}/></td>
                <td><HTMLIcon width={'40px'}/></td>
                <td><CSSIcon width={'40px'} /></td>
                <td><JAVASCRIPTIcon width={'40px'}/></td>
                <td><VUEJSIcon width={'40px'} /></td>
                <td><PHPIcon width={'40px'}/></td>
                <td><SYMFONYIcon width={'40px'} filter={'invert(100%)'}/></td>
            </tr>
            <tr id='resRow'>
                <th>Réseau</th>
                <td><VIRTUALBOXIcon width={'40px'} /></td>
                <td><LINUXIcon width={'40px'} /></td>
                <td><BASHIcon width={'40px'} filter={'invert(100%)'}/></td>
                <td><CISCOIcon width={'40px'} /></td>
            </tr>
        </table>
    </div>
  )
}
