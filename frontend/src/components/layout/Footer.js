import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        {/* Footer Top */}
        <br/>
        <div className="footer-top section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer about">
                  <div className="logo">
                    {/* <a href="index.html"><img src="/images/logo.png" alt="#" /></a> */}
                  </div>
                  <p className="text">Website này được tạo bởi a Mạnh và a Minh</p>
                  <p className="text"> <span><a href=""></a></span></p>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                {/* <div className="single-footer links">
                  <h4>Thông tin</h4>
                  <ul>
                    <li><Link to=''>Về chúng tôi</Link></li>
                    <li><Link to=''>Điều khoản và điều kiện</Link></li>
                    <li><Link to=''>Liên hệ với chúng tôi</Link></li>
                    <li><Link to=''>Giúp đỡ</Link></li>
                  </ul>
                </div> */}
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                {/* <div className="single-footer links">
                  <h4>Dịch vụ khách hàng</h4>
                  <ul>
                    <li><Link to=''>Phương thức thanh toán</Link></li>
                    <li><Link to=''>Hoàn tiền</Link></li>
                    <li><Link to=''>Giao hàng</Link></li>
                    <li><Link to=''>Điều khoản và bảo mật</Link></li>
                  </ul>
                </div> */}
                {/* End Single Widget */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer social">
                  {/* <h4>Thông tin</h4> */}
                  {/* Single Widget */}
                  {/* <div className="contact">
                    <ul>
                      <li>Số 263 Dã Tượng, Nha Trang, Khánh Hòa</li>
                      <li>Nhóm 3</li>
                      <li>info@tltore.com</li>
                      <li>+012 3456 7890</li>
                    </ul>
                  </div> */}
                  {/* End Single Widget */}
                  <ul>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Top */}
        <div className="copyright">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="text-center">
                    <p>Copyright © by anh Mạnh and Minh</p>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="right">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
