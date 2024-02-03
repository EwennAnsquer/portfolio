import React from 'react'
import './skills.css'

import CSHARPIcon from '../icons/CSHARPIcon'
import GITHUBIcon from '../icons/GITHUBIcon'
import HTMLIcon from '../icons/HTMLIcon'
import PHPIcon from '../icons/PHPIcon'
import SYMFONYIcon from '../icons/SYMFONYIcon'

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
                <td><PHPIcon height={'40px'}/></td>
                <td><SYMFONYIcon height={'40px'}/></td>
            </tr>
            <tr id='resRow'>
                <th>Réseau</th>
                <td>25</td>
                <td>22</td>
                <td>30</td>
            </tr>
        </table>
    </div>
  )
}
