/* eslint-disable jsx-a11y/anchor-is-valid */
import './MainContent.scss';
import blog from '../svg/blog.svg'

const MainContent = () => {
    return (
        <>
            <section className="container flex-center">
                <div className="row mt-9">
                    <div className="grid-4">
                        <h1 className="h0">blog<span>.</span> </h1>
                        <p>
                            Um blog para todos.
                            Escrever. Ler. Comentar. Contribuir. Aprender. Conectar.
                        </p>
                        <a href="" className="btn mt-2">Começar a escrever</a>

                    </div>
                    <div className="grid-1"></div>
                    <div className="grid-6 flex-center">
                        <img src={blog} className='illustration' alt="Blog Icon" />
                    </div>
                    <div className="grid-1"></div>
                </div>
            </section>
        </>
    );
}

export default MainContent;