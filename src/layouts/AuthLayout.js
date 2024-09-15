import React from 'react';
import './assets/vendor/css/core.css';
import './assets/vendor/css/theme-default.css';
import './assets/css/demo.css';
import './assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import './assets/vendor/libs/apex-charts/apex-charts.css';

function AuthLayout({children}) {
  return (
    <div id="auth">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-12 mx-auto">
                    <div className="card pt-4">
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthLayout