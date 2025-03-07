import React from 'react';
import "../css/Members.css";

const Members = () => {
    return (
        <div className="members-container">
            <div className="levelOrganization">
                <h1>Executive Team</h1>
            </div>
            <div className="members-row">
                <div className="member-item">
                    <a href="https://www.linkedin.com/in/akshaisrin/">
                        <img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage" />
                    </a>
                    <p>Akshai Srinivasan</p>
                </div>
                <div className="member-item">
                    <a href="https://www.linkedin.com/in/sumedh910/">
                        <img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage" />
                    </a>
                    <p>Sumedh Chinta</p>
                </div>
                <div className="member-item">
                    <a href="https://www.linkedin.com/in/christopher-chen-56b889342/">
                        <img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage" />
                    </a>
                    <p>Chris Chen</p>
                </div>
                <div className="member-item">
                    <a href="https://www.linkedin.com/in/lucas-varotto-353bb729a/">
                        <img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage" />
                    </a>
                    <p>Lucas Varotto</p>
                </div>
            </div>
            <div className="members-row">
                <div className="member-item">
                    <a href="https://www.linkedin.com/in/evan-myers-011227298/">
                        <img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage" />
                    </a>
                    <p>Evan Myers</p>
                </div>
                <div className="member-item">
                    <a href="https://www.linkedin.com/in/nicosusanto/">
                        <img src="https://blog.cdn.own3d.tv/klSI1CBgQyWinwR0XvJZ" id="bigImage" />
                    </a>
                    <p>Nico Susanto</p>
                </div>
            </div>
        </div>
    );
}

export default Members;
