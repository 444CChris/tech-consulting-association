import React from 'react';
import "../css/Members.css";

const Members = () => {
    return (
        <div className="members-container">
            <div className="levelOrganization">
                <h1>Officer team</h1>
            </div>
            <table>
                <tr>
                    <td><a href="https://www.linkedin.com/in/akshaisrin/"><img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage"/></a></td>
                    <td><a href="https://www.linkedin.com/in/sumedh910/"><img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ"id="bigImage"/></a> </td>
                    <td><a href="https://www.linkedin.com/in/christopher-chen-56b889342/"><img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage"/></a> </td>
                    <td><a href="https://www.linkedin.com/in/lucas-varotto-353bb729a/"><img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage"/></a> </td>
                </tr>
                <tr>
                    <td><p>Akshai</p></td>
                    <td><p>Sumedh</p></td>
                    <td><p>Chris</p></td>
                    <td><p>Lucas</p></td>
                </tr>
                <tr>
                    <td><a href="https://www.linkedin.com/in/evan-myers-011227298/"><img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage"/></a> </td>
                    <td><a href="https://www.linkedin.com/in/nicosusanto/"><img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage"/></a> </td>
                </tr>
                <tr>
                    <td><p>Evan</p></td>
                    <td><p>Nico</p></td>
                </tr>
            </table>
                
        </div>
    )
}

export default Members;
