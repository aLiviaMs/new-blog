/* eslint-disable jsx-a11y/anchor-is-valid */
import logo2 from '../svg/blog-logo2.svg';
import facebookLogo from '../svg/icon-facebook.svg';
import instagramLogo from '../svg/icon-instagram.svg';
import youtubeLogo from '../svg/icon-youtube.svg';
import twitterLogo from '../svg/icon-twitter.svg';

const Footer = () => {
    return (
        <>
            <footer className="bg-section bt-black">
                <section className="container pb-0">
                    <div className="row flex-center">
                        <img src={logo2} alt="Blog Logo" className='icon-l' />
                    </div>

                    <div className="row pb-3 bb-black">
                        <div className="grid-3">
                            <h4>Posts</h4>
                            <div className="flex-start-column mt-2">
                                <a href="#" className="color-gray link-footer">Mais vistos</a>
                                <a href="#" className="color-gray link-footer">Mais comentados</a>
                                <a href="#" className="color-gray link-footer ">Mais populares</a>
                                <a href="#" className="color-gray link-footer">Mais recentes</a>
                            </div>
                        </div>

                        <div className="grid-3">
                            <h4>Categorias</h4>
                            <div className="flex-start-column mt-2">
                                <a href="#" className="color-gray link-footer">Tecnologia</a>
                                <a href="#" className="color-gray link-footer">Games</a>
                                <a href="#" className="color-gray link-footer">Fotografia</a>
                                <a href="#" className="color-gray link-footer">Cinema</a>
                            </div>
                        </div>

                        <div className="grid-6">
                            <h4 className="mb-2">Quer ser avisado dos novos posts do blog?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ornare urna pharetra ut ac, pellentesque.
                            </p>
                            <div className="flex-start-row mt-2">
                                <input type="text" name="search" id="" placeholder="Digite seu e-mail aqui" />
                                <button className="btn ml-2">Cadastrar</button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="grid-9">
                            <p>2022 | Projeto de React </p>
                        </div>

                        <div className="grid-3">
                            <img src={facebookLogo} className="icon-s" alt="Facebook" />
                            <img src={instagramLogo} className="icon-s ml-2" alt="instagram" />
                            <img src={youtubeLogo} className="icon-s ml-2" alt="youtube" />
                            <img src={twitterLogo} className="icon-s ml-2" alt="twitter" />
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;