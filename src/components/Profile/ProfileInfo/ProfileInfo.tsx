import React from 'react';
import c from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div className={c.content}>
                <img src='https://www.cruzo.net/user/images/k/ecc3ecf42c75db1ffce5d06cbe95b1e6_644.jpg'></img>
                <div className={c.descriptionBlock}>
                    ava+description
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo