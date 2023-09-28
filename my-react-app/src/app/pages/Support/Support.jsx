import React from 'react'

function Support() {
  return (
   
  <div className="container-fluid mt-9 pt-90 bg-neutral">
    <div className="container">
      <div className="row">
        <div className="mt-900 sm:mx-auto sm:w-full sm:max-10 p-200 bg-gray-50 rounded-2xl shadow-2xl">
          <div className=" section-title font-semibold text-indigo-600 flex justify-center w-full text-4xl mb-4">
            <h4 className="">Entre em contato caso encontre um problema </h4>
          </div>
          <div className="bg-white border border-top-0 p-4 mb-3">
            <div className="mb-4">
              <h6 className="text-uppercase font-weight-bold">Informacões de contato</h6>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-map-marker-alt text-primary mr-2" />
                  <h6 className="font-weight-bold mb-0"></h6>
                </div>
                <p className="m-0"></p>
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-envelope-open text-primary mr-2" />
                  <h6 className="font-weight-bold mb-0">Envie um E-mail</h6>
                </div>
                <p className="m-0">tccams2023@gmail.com</p>
              </div>
            </div>
            <h6 className="text-uppercase font-weight-bold mb-3"><em>Nos informe sobre o problema</em>
              <form>
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control p-4" placeholder="Seu nome" required="required" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control p-4" placeholder="Seu Email" required="required" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control p-4" placeholder="Aonde o problema foi localizado?" required="required" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows={4} placeholder="Nos de mais informacões" required="required" defaultValue={""} />
                </div>
                <div>
                  <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{"height":"50px"}} type="submit">Enviar</button>
                </div>
              </form>
            </h6></div>
        </div>
      </div></div></div>
  )
}

export default Support