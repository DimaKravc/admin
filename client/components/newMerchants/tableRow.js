import React from 'react';
import classNames from 'classnames';

export default ({user}) => {
    let {clientStatus} = user;

    return (
        <tr>
            <td>{user.registrationDate}</td>
            <td>{user.organizationName}</td>
            <td>{user.email}</td>
            <td>{user.partner}</td>
            <td>{user.promocode}</td>
            <td>{user.trafficSource}</td>
            <td>
                <b className={classNames({
                    "primary": clientStatus == 'Активен',
                    "secondary": clientStatus == 'Подключен',
                    "tertiary": clientStatus == 'Верифицирован',
                    "quaternary": clientStatus == 'Документы на рассмотрении'
                    })}>{clientStatus}
                </b>
            </td>
            <td>
                <div className="moderation-menu">
                    <a className="moderation-menu__trigger" href="#">
                        <i className="i-manager"/>
                    </a>
                </div>
            </td>
        </tr>
    )
}