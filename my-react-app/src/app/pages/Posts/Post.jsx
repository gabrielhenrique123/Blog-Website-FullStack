import React from 'react';
import "./Post.css";
import "bootstrap";

import "./Post2.css";
function Post() {
  return(
    <div>
    {/* Main News Slider Start */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 px-0">
          <div className="owl-carousel main-carousel position-relative">
            <div className="position-relative overflow-hidden" style={{"height":"500px"}}>
              <img className="img-fluid h-100" src="https://t.ctcdn.com.br/MfVRRgHlmrLqyb5VpKWhfDcz9so=/768x432/smart/i801111.jpeg" style={{"object-fit":"cover"}} />
              <div className="overlay">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Noticia</a>
                  <a className="text-white" href>25 de Setembro, 2023</a>
                </div>
                <a className="h2 m-0 text-white text-uppercase font-weight-bold" href>5 IAs para melhorar a qualidade de...</a>
              </div>
            </div>
            <div className="position-relative overflow-hidden" style={{"height":"500px"}}>
              <img className="img-fluid h-100" src="https://th.bing.com/th/id/OIP.8_cLsV2HRjoJJuKfriVtDAHaEK?w=323&h=182&c=7&r=0&o=5&pid=1.7" style={{"object-fit":"cover"}} />
              <div className="overlay">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Noticia</a>
                  <a className="text-white" href>25 de Setembro, 2023</a>
                </div>
                <a className="h2 m-0 text-white text-uppercase font-weight-bold" href>5 IAs para melhorar a qualidade de...</a>
              </div>
            </div>
            <div className="position-relative overflow-hidden" style={{"height":"500px"}}>
              <img className="img-fluid h-100" src="https://th.bing.com/th/id/OIP.Ein3_cacZ1K6lyGgsxHv-QHaEo?w=293&h=182&c=7&r=0&o=5&pid=1.7" style={{"object-fit":"cover"}} />
              <div className="overlay">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Noticia</a>
                  <a className="text-white" href>25 de Setembro, 2023</a>
                </div>
                <a className="h2 m-0 text-white text-uppercase font-weight-bold" href>5 IAs para melhorar a qualidade de...</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 px-0">
          <div className="row mx-0">
            <div className="col-md-6 px-0">
              <div className="position-relative overflow-hidden" style={{"height":"250px"}}>
                <img className="img-fluid w-100 h-100" src="https://www.alura.com.br/corporativo/assets/linguagens-de-programacao-mais-usadas/linguagens-de-programacao-mais-usadas.jpg" style={{"object-fit":"cover"}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Noticia</a>
                    <a className="text-white" href><small>31 de Junho, 2023</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>As linguagens de programação mais utilizadas em 2023 são...</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="position-relative overflow-hidden" style={{"height":"250px"}}>
                <img className="img-fluid w-100 h-100" src="img/news-700x435-2.jpg" style={{"object-fit":"cover"}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Noticia</a>
                    <a className="text-white" href><small>31 de Julho, 2023</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Empresas estão atrás dessa qualidade para trabalho...</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="position-relative overflow-hidden" style={{"height":"250px"}}>
                <img className="img-fluid w-100 h-100" src="https://th.bing.com/th?id=OVFT.Um4xhpXMcsFHbEzjt9tYpy&pid=News&w=300&h=186&c=14&rs=2&qlt=90" style={{"object-fit":"cover"}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Noticia</a>
                    <a className="text-white" href><small>26 de Setembro, 2023</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>Jogos gratuitos essa Semana ...</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="position-relative overflow-hidden" style={{"height":"250px"}}>
                <img className="img-fluid w-100 h-100" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEIALgDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABAUDBgACBwEI/8QARRAAAgIBAwMCBAQEAgYJAwUAAQIDBBEFEiEAEzEiQQYUUWEjMnGBQpGhsRXBM1JicoKSByQ0Q1PR4fDxFkWic4OzwsP/xAAbAQACAwEBAQAAAAAAAAAAAAAEBQECAwYAB//EADMRAAICAQIDBgQGAgMBAAAAAAECAAMRBCESMUEFEyJRYfBxgaGxFJHB0eHxIzIGJEIz/9oADAMBAAIRAxEAPwC79xiDyeouTnnqNJCRzz9etwc+OmeMRWTmbqSD562Y7x5IP68da4J8dbbGHP8APqCZIE8KkDyf8usO7HBP7da5bP1699vfr0ie7SQecHrXawHJP+XWwJ8EfuPbrcAkfXqM4k4zBSkh9zgn+/Wrx7ceR/n0S2ztmSRisOXEaJ/pLBX820jwg5yff9PzCYEdisdsaRWg6YiLbe7tDqHB9OTzgjGfH06D/HA3d0q5A5nbbym34U93xk4zy9Zo4xzz9OoJF3j3z4GOmLxqAR/Q9Btldw9j00RswJhib14EwSR9j1vEoR2AbAznHUCyyRkA8qcc/TqZSCwb9OoOZYQsu2V5448dbHe7A5IHWkQJz/PPRaKpP9OhmOIQm89RcYxnj36IGcYyet44wQB7dRaiJI64kgnEMkbbgGXImwCe3xz9/wC/nICttCgk9IWlZaTJGx+w6nVFX79AR6rDgrYhnhlXb3F2blGQCDyQ2D7ZA6JrWo7Su8ayhFfYDIoXcQMkrgnjoQalLDwq2/lCe5KjJEJHHXuT1qD1t1pPYmZOR1nXmes6mVMp8fOSCfPRCH78dLY5sBSjKythlZSGVlPIII4x0Uk2cfXp0RFGDGCY62JOD1DE+7GP15PH3JJ6iq6npV2V4Kl6pLMvcyvc2j8PhiCwGQPtn+mQLY4TdjNkUtsJNxnnr1uBndgZ9TAbto85xkf368BlmUbYzCcDczGN+fcJtLL++f8AzGxxCJHO8gtuwNztk4XCr9OqC0WKeA/OSUKN4pEjOV/OA5BKZGCVzwxTOepDKyj6E+nI9h5Zv2HUC2KcjlhIO4AVIZJFkHgldpXP09utplfABVleThIz+dIuDuYDwWPOPoB0Fq9WNNpyc5bkPj5wiig22gEYHMyWBo2/FlkCu+EiXBYrGowqqoycdCTohftBCDtfbFISFwMbsI5xjx7dFxVlHJABIxwAWx+p4HW7VkdkZjI3bwY97btpGRwTz7n39+uf03Zepchrdgee5yR6+/4aXayoE8G5HLbaLVmRZJIpC0WdjRiVjs5UBgrsceQTjPvx9pfw2wqsjOSADvURjPu7+B0bLXRgv5uD/CxUkHyDj260FOuR+QbsYD4yw9+c+eul/wCxVX3dONhsSTn57fXPyijhqd+J8jPQQZIO7Jt3ZERRnIOAxYHCqvjb/Mn68ckmCKMbi20DGScn7+3PWsMNsWUIiKJtKTMcbCo3Fdhz7H8v6kHqdqszhI3lYgCRmmBCybmONoXGMY+/9+h9Ffd+H8QPHvnPn+3w2m19NfeYB8O3Ly/eSQxDAOQykAgjwQeQejEQKrELlgGKg+CwBwOtIoxGMAnHpCqSMIAoXC49upQZRLGFRTEVcyOW9SsPyhV/v/7yWznrM1UCC0prTSTSzmZa6RetrGFjEoIP4YKjAxnIH29+opkuXTiGORoPWFlmZEyjNvOAecHgD0+FHWrQio1f5iSS9ZkY9hJG7cShSBvbcXOecDzz4AxkRDX2qyTDVYooIgN6muXkkhUf+OhJ9P8AtDGPcY9XSM18VYpuY/nufieQ97xmuc8dYkGpJJRgmu3TOIUUfMTLIJT9FHGDknAAx7+eeqhJ8d/ENKaCFa1NYAysleeOVrEkUjZCmRWBz55CYGffHNm+IbT2dNuXAteSo8RhrV7CkylsZZ0XPEo5K8HGM+3HKprD2JRJJvlsuZGsSM4IBYBicgkKo4KqPP36ijT102M9ZJJ55M0d3dAHE7po2r0dboV9Qpk9uXKyRsQXhmXh4pMcZH9QQffpl1zD/ozvEW9a05pFIlr178SBdo3Rt2JCB+hQE/Yft0/pkDkZghGDiZ9Os699x1nVpUzmpMde9frxBUj21rIjQALG8wdXCgcAErux9Sfr0dDICOT0lmsxLq195d6xWpIK0ExA7KvBujEbnPBYk44x+55OAZc56O7Nbj0qZOTMNenDe2BgQX4i1N4BFQEdnsSRLZuSVpAkjQhmCwrgE4JGXOPA6pk92eWVJ5JnmkiMaxzxBUnjlXaUGEUYI4HgefoMG36lpUd9msRzSRW+2sYO4mJlXwGX/wB/15W6bo01Oz87qcTdmFXcCu3eQSK4dWkRJI5CM5I2sDnn3x0PqabGckjaXosRUAB3l60y4JqVIzugsmokzhCjCZVUbpoe1lWUnztJweDgjHTDcrAYOQQCCPoeQR1VmvRQy0kTE7y6htlM0qxxl7SrApeTCKzEnAdolf0ncr7CensNmExwgghtqh8MjCI7jGodgfcjAOMcj69XFi1qA5A6fpMLKyTld5LLCX9SHbIBjPIDj6Nt549j7focH2vC0e4yEFyeMEnA9ySQOepOpAM46q2kpa4XlfEOshb7BWagdpso58cdShetEB9+pRx1sxlQJr2yf063EYGOOtgf6dbBh1XJlgBPNoB68PHt1tlT14cdVlp6pHUgPQc9qrUCGZ2DvzFFGpknl+6Rrzj7nA+/QbXtTnyIYkpR+zy7LFo/og/BX/8APrC25K/9jNq6nfkJHrEfzM88QlCBKddXIClhueSTAJzg+CD5HB6RveAfUNP1GzG7muny1m6VGYGRlYTOF3NsOCM5J3fboi40lJu563hnkzZlYl5C5HDsfJ8Y/T9MEc/J2ZoLywCXt5hRnUMjhHDFtp9vPtnj2z1zz2G+7bYGPq6xVVvufSD09RnFaeSLTb+qapPEm6WdAsaSuCZo1kB2BCfpgnODjwIK/wAAnU4KNxdSjhS05lvhIhKzgsxYR5YqrZ9BBJxjnJyDaIJ9Smijh7dFCVIaQ7wdyEFsRjzwVI5Awej9B2jTYwuCvzV8pIORMpsyN3R/veemNC8LlTAbnyoIkmj6Fo2hxNFp9ZUaTBnncl7E5Hgyyt6j+nj7dNfHWmevGYHz/Lo8CBEz0uMjAPnrOowckAcc9Z1bEz4pRtO02tc03UYJE3RfMrCyuScxpCgILefc8/foBO/WeWnYYvLWIUSNjdPCf9HKfuRw33U9WrQYCulxs4Iaw89hgcZG9zgfsAB0q+IKpU0bij/RS/K2P/0bBAQ/s23/AJj9el/ZlxodQ3Jox16C0MRzECjdcjJ4zz0dG1cEAH+fHQkMOWVTwTjz0zWuqqPTj7+2eusOOs5tjmQ2YKjLWeaINHDLgIFUxsJcK6lSCMEfb+/R7QwWIvma8iSABkJI9ShhtaOZPOD4P+R6X6gbDU5IK88kE7sphligjsOjJ6w3akIUjjHn36W6dN8RSSuLsT1rdeKsotKI9t1jHmQhY0A2g+zA+fb2+c/8oqVrg/ENhyzuN+ePLl73j7szJTHr8pZqUolDRMCJIshg3LbeACT4z4B/Y/xdGhOua/F+sX6cFF612KpfgsLbDwCbfZEZ7aop2mPA3MWUtyPtwbdoPxBJqMNJb0CQXbUdeRUjyqEOhDsA3I9QOBk8N9uXvZGrt1GkV7efL4+vzg+qoWqwhZYMEdbdekMMEdbL9xjP16aEwbE169Az+nXrD+fWvUT0zGOg57UzSPWqbe4h2TzuodIW94408M4988D3yfSJbc7wpGkRPzFhmjgIAPbCjLzHPGFGMfcjrWrFFBGiIMKowo5JxnJJJ5yfJPQOq1BTwKd4Zp6Qw425Su/EOqw/DVVGjg+b1a+tiWtHO5LSiBN8k9h+GIX2UEZ8DAHHK/8A61+LWvw3pNTssI5kkNWNzFUdFbJiMMeE2kceOuufGWlzatpSNTTOp6XN/iGnlRlnZB+JB/xgcD3Kge/XDNQhjSSKxCu2tcT5iFQciM5KvF/wnI/TH16z061nfmZpazTvfcp6jUhnhYtXuQRzRMPO2RQ6n9R/cfbqvbJKkV2rsmO2YXKzwhCizIVd1XPtkbsYOM49+K58IfFFOjotujfspGakxeoHDs0sU+SYo1jBY4bJP+9/K1aBDFblOoahHJCYolWlXvuA/ZlUgzTRuMAtkhQXbyfc8BDRlrSuNob+JCVhs7wmvWhuyRx9ztxTRhBLCCkjx7jkRscOAytGM5HBGARyLfAIYo4oYlWOKJFjiRBhURQAFA+3VQvT1qk0jRtM8IKyyCurbwCsil1sZ7aBCVLs5HGSM4yC9I1PUrFGnalmSx8wneAnijrzGNmJUg1/RyMEDYf19+jdTqdPolFl5xk4z76RcA9uydJai6+3WjN9x0Al+ucCRmhOBkTDC/tIMp/UdEg7hvX1J/rJ6l/5hx0VRbVcvHUwYem8wfiBwwxJN3I/XrOtARkc/TrOiMSmZ5UgSGtWi5/CiVM/XA5PQOo1lsw2oMf6WN0B9g+PQf2OD00Vhgj3HQlhiMNjwST7dIbOEKMRuhJY5lbjZrEcMixbSyqxxwA2ORn9c9Hxl0RVYZOcn36jqKjpMqHJinsRyBDntsHLYYDx5B/fo+JIjkM2ABn3znrqFt46wx6ic+9ZVyo6QKaGKXloo24IG9QwwfbnoM1qcQLNBGqryePSB/u+P6dWAwxPhVIJyB7/ANR1V73zmsz26GmyPHXh70L2YG4jnVWAeXBBAHsCR5JwduDjYaiOJ1B+IkgOCAp5yGzpOj6m4tSabVCwlJmtOrJK4UhBkjCheNuWBJx6RxkCam8KwW7Ebdswwn5d4VdJIhEpzKm3leM7QPAA6Gax8QafpxbUoYpIK83ad9Om75DMGCySIuRuYKEBBOPoNxPR2iCO+ZLCI3ZgO3bNH2p1nYK+SQScgeeeOOq1ulv+hkMlqN/kgnwl/wBI3zbRabr7xR2CAle+cJHM3gJZH5Qx9mGAfcDyejbyTk/TnI65n8RfA1PUO5c0hY6d0ndJXPpqTn3KYGEY/wAv08lHoPxd8Q/DssmkapWs2qtX0NA4PzdJRj/QseCnPAJxyMEZ5gqV2aE5DbrO0Fx/8dYOcfX+vSOjq+nalWe3TtRyV4xmZiwRoDjOJ1b1Kf1/bPW0l2xIjGsGjTH+mcESsD7xo35fsTz9h56ra6VLxMZNaPYcKJvLYEluw/lUPykB9u3Gcsw/3myf0A+nUvfIAH2/t0ha1DASjOFZeNuSWA/v1BPrUMOAS7O3pjRfzuT4Cryx/l1yFtzW2Fh1nT10BKwJYZ9SqU4pLFqxHXgiG95ZGwB9AoHJY+wAJPt1xH4juUL963a01Wi06e48iQStEJfmCi96ZYU5VHOCAT/bCWD4h+KbKCKGsaT4mtRWosCXYVRY8bjhgfU3qU/XB4PVT0SvVuavpdey5jgmtwI2yLvFizgLGEYgcnAOTwDnnGC60NLKvG/MxVq3Xi4VjrSYtaqzLqOh/D09qCOEiCW3Waw5lcYExKgDg52gYH13e5VT481lJqMGrLFYrwSqL8hrQvemVJGYqsmUwRwBzxjPPIboem/Emgz3dYpJTt0dP0RIqLWQshqB+8KQhEcYyGJbCArkgEnGOOY/Fmm3K/buXNLr6ZYe5aqvXqndE8cYVo5cx5jBPqH5huxnAHTFdjA235yyxfHJ12PWdKXTa1OtY0nUYkmkuBSjvXaONG3BUJdiqgAD830BPW/wxP8AGZlGlS6dUC6S8UF+zZ7rThSAwgjML9reqkcEce/PnlgJBBBwRyCPIP26u3w6leSvAuo629WvNq4khpwTCGW9M8UYLz2N2VjHAJI/1vB56V9r0rfp+FgCemxP5Af11M105KNkTolqbUFdVPyEIB4Lzu0r/wDBHyOucfFd/V6Wri3W1V4ZnjiWKPTnng7ddEG1mORksS31/wAh17TtM02KvWC9iSv2ozClVt1do9o2nvHLuCPfOD9OpBomgLqE2qfIQSXpVhRZZ1EogSJBGq143yiDHnaoJJPPPSzsbsl9I/esMbY9f4+vxm+p1KuOETi9f/pC+O4FXOoidBgA2qtaU8fVym7/APLrOu8llIwwBX3UgEY/Tx1nXU4MX5E0zgv9z0Hakwj/AFPUrzKN5J48j9elliwjMikj1EjH39+uaduLaOUTG8rWt6XKZat6nPJXuWopEDxEpI1lGEkJDggggF/1Awfs80LXYtQrVY7L12v9kSSxRsFmdFwC7IPoTtYgYyM++Aj+KdRjX5CJVLdiUTs6sF7L8ENgc5C7j9sj646qtVpTXVq8kcc0hllkZgO5FGiSOShJ3bVQknPk4A56e6EnufFy6T2o0vegHkZ0LWtQsVjXRoUZ5JttaOOOwssj/m2K/dHty3GMA/TAhr6Zat6eIZ688kAd569ii6GVZjnd8zGck5wMHa2ARxyeq/8ADFSOQ6zeGJSlada0kgIZ1kkMXdJbnLZA59lP15uNJtIql6s9OeOdZWZrEEcxEjlz6i1cllPPv+vjBPrLFtYp5QD8P3ByDnMQVzLXkkUzxQwhJq0ladmhsCGNGnwsDDby2WU4Gc+efUz+HoIv8OjcypJYmZ7FoKwMiSyct3FySOQcZ6A+JtRkm+ZrxyJJHTjeaKwU/wCsFSsarG5KjkFicY9gTyelNLX9QpKtSM04XZWaSaVpZ5GAjMkUqRY7atJ6VGSeVIPP5Z0qrWzYOZN1dl6qwG0vbRQJsDuibyAvdkSPJP03kdca+NfiCDV9ReChtOnUvwY5lUB7jqTmV2AztzkRjPA58semmpHWpBqT6i9aSvZnWFJBAJ76iad0VY2nIVeQVZgTj74A6Dr6PXjqrbaCjUotXstHcsj/ABCeWxEHjEJEmIFBIBJ7Yxnycdb2XjG8yGl4Dsf0i34a+IINIuiW9XNmu6rGzpj5iLacqybiFbH0P7EY56PX+Iq2txxx6JFZlmmkeFYnjEciuoDEsdxHg5zu8fTHXK5bV+u/bu1Krx7gJIpKcEXspKCSFFdTjHhh/Xm9fDvw7FJRqXasBkElma1TkkkkMkQkEeF9OF3pjBIX6/XAT9omquvvH+nWF6Z2VsS2xaL8N1Tt1i3VmvFsyq08myNj/wB324T7f7Qz+ngTanPonw1pM+q6bR095lZBVjjkr1xYcetyJSdx2qGYgZPHj6JKVOKzIk87OELMECydt5guQRAzejeCD6SOcHnI6V6tF/iVW3pscn4Nh1aGQqFxZhyVMiHgHyCRjg/qpFo7SWsgNXwr59f5k21PYTlsmc21CarZvX7FWJ4a09iaWGKR97Ro7Fghb3x0MrMjK6MVZSGVlJBUg5BBHW0sckMkkUilZI3ZHU+VZTgg9addDzgE63D8cVV+HUu3VxI0s1aChXsSmW3MoUmazM+XCgcEkknzyfyUj4i+IL2sRafvjNWGRJJ3rV5ZWqyOJGRZdjsfVwR/89B94SfDJgzzV1wS4+1qoV//AMv69DWgDp+iyfRLkJ/VJzJ//fqcCezAOpIFgeaJbErxQlgJZI4+66J7lYyy5P0G4fqOo+tk2b4+4WEe5d5QAsFzyVBIGfpz1E9Pob4fuUp9G0mSvXnqwCuIYK9pi00ccDNCNzHnnbkfY9Ne6vktj9j1QdA1XT6eiadFUr2mULK3cvDbI7PK7lyFYjnyOTx/Waz8QOFDT2YoEJYLuZYlJA3ELk58dHJQSoJgjOeLAlwm1KtEQMbjnwGAJ/brOuLa38W2bJkr6c8kcJyslk5E8o8YT3Vf6n7eOs6ozVKcAZlgjncmdWs3QAxLYUZH1z9v16pFz4pR7E5qCeU190amFG7QJIX1SAY8/T/Pja3qElmhbsWGeCGaCRNPigLCzak4y/IOI1HJJAzn2B9aH5fUWqzz1oJTTgjWZm70C1omJyVUA7WYDGVGSPp7dc7p+z2YZuGM9OX5zqksQklTy97SOSS/bmtNYmZXaXNg4JbL4UxIBxnA8Z+g5z0wbQns/KV4MRPKe/Y32RJJFXldVr1ztGwSMMkZGTgngKAQ9OXV3ikmpwQsI5o4ksTKMxT2TlGhUnGRgkELgAH3HFxs6VY00UYYppZprGyaaSUxunzM8zSyOY2UgsWVSCfGP9rHTDWXnSrwpgH06e+kggPgAbxnX086BFdrImIrcEa1pCCY1li3N2X+5PK585x58hprl+aKKOxBFJM6SEWWC5VzIzb3XG0KAdqj6jn6dHV9djNeOK9VbsSxMwZH7ymMsV2MpUH0n0k5Ptx9ItMTRoCZrYhEjgypHPIpEcWSy8TFVJA5JJ9/vzz7uW5HnJUBcmwbxTqdaz8hqhhBZFrRNNZGNpCuJpSjkcnwDjjj9jSJpQ0BdYZwC5cyuGCsSIm2AePckH33ddH+ItWrz09Qqn8CGTT55GWxDPHNhgYox2zj3wSSABkfmJx1WO1KtTVDOtpqY0qqCUSujLAkNZowwzgc9vdj1Yx9cdNuzGCg/GVybFIziBQrBT02C40JtT5qXEkkSRDFHXupK0cGXwysAckoDn3IPHRJ9e0CjBLLcs6dPSksSS1Ski2XkErNOvdSNCq48DPvjx1z21Br1CrXoWsGzbES1Iq9lZJElZV2QzIpAVskHB8YPt1L8RaXp/w9ommaRuWS/biaxdsKQ1dZkmXeoYHOV4AwpOB7bsDXUHvmwOefp5j4QJ3Tizjp+Z6Sr6jrNjUpNQewuVt3J7qqMARSSn249hgfsPp10rRdWnp6NTrRApu0wFfqGMSrwPY+/wC/VY+Hfgz4iktQXzBElavIm9LQQtMGHriC8gHBIzng/ccWrWIGqOz9ixHvjmdVdSFXC8qJkBjzjkAsCfA/LyB2nX3tQFZ3BmOnB4ssOcZahW3UYpYI5Fpsio4OGWKYBUL8cbXwCPvn/XBFfjitLJIZV4GwswYkg5AV8MMkDjPORwTn3tumRUWMU5pyMYok+ab5VigkeM9wLOyrFgh1H5yMKCMFiTVbZrKz10vsWKqEhrhJoY+0zsDPcdxHwMDau8nGMjjANuhZmzX/AOucLR8g+kqOuUq9zVX+WYmzNMgniUHLO/GYjjBBOf05GOOVzVooi0apuZfS2ACqsrBXQ5BJxnn7DPt1Pqgm0rWQVaVFcV7kMqllmWGyizZXJ4YZI8eRz0XYaGUl6lc1qCbUrqzAyvgKC8jZz6gOfuTg9Pqwa61XOQBF4IckwAQRrpevooO0SaZdjz5UI8tdlJ+3cH9Pr0MyiTQ4HzzW1SeNh9BZgjZf/wCNun+kVIrjazpysztd0yavTIBMZtd2GaESOQcbimFOeSffp/B8FUNO06wl3UUsvLLXsS18CKFmro7ja28S4IYjOB+bx0QG8OZmV3xKz8L/AAwdTLalqO6LRaokmmYkq1pYQXdIz5CjBDN+w55RD3IbV6axLmCF5XmYVwgMSF8hYlYqOBwAPp11/WK963op0zR4YlN9Iq3c3JDVqUlAkdnP0IAUAA8E8cc8YnSOOaaOKUSxo7okqqVWRQcBwDzg+R0k7I1za57Ln26BfIeZ9SftN9RWKgFH5yyN8UqsNeKvVI7RERNhjJ+AihVPpK5c+W59vvxBq1qHW5NNhoxSmeONxIGclBuIJZmbCD9lAAwMseQkr13nbA4UY3NjOP8A16sdWStSh2Qx7Acdx3I3yNnA3HH34467Gmq3UDLHCxVZYlR2GTJ9Oo6ZpTBrVYXbg2lX7mIIiOfw1A5P3P8AIe+dGxW/h9GQPYsySpD+JXs1TXqS2vzBZbBO9YxwCNgJx+YbuM6qNbpq/Cik/T7kSDTc27HH1+0Gl1ShbkksX1m+aRZViSCKM1kjUEog3PuOWOST454JPpcx6Re1bt1PlYqWmb605ksiu2pzxywtOg3plVU4x7EbhkNtx1v/AIVoohjqR1oZ1jnllFp1KzWwWYo8pyOApACg4PnB9jI4p4yqwySRJHGsUZjbiONG3hI85wM/T6/fpLqdcqtirn5ztK9HaagFwF8plsVw8VeNpZJIK1No5C6RpC6IGjTtxxqCEBIB84bHjye92a+IUZI1niUdgq5/EkjkEyKVYe/qHn36jsaRqFGnXnkjjSvIQsYWXfLll3DeDz4H1PQQZl8jHjGOD9uk17OzeOG0aWuyvKtkzdux8tJtk9PzLyxRsArJE3pfcR5zkg8cFPv1Np2ky6nHaAeJYFkBtRzEtHZl2CNA6JtYKADzv8gfTHQFgNMJGXd3ts0kiRMBuVSp3lGx+bgnBPg8ccMI6F/T65mu2JYUlkOVqTxtsKZz3nXcPc+M4459XAdauGziDagVhCGYZBm2o6XRp0GSe+RLamdZdhHZWWw215lXbnIBOBzjqj2Qmj2tJhWZ9X3KLdfTgZhEkrSfhrMqfmB2oSFxnGONvNxNHU7jySVqE82VdVa26JKqSiPYwSQ5C/mIzg8+OekOr6TZZrbCCWDWU041/lsB1+WX05gYcElcgkHx7ZPTnR2d0CrdYlvuBXwg/Gex/EdqlNYuPXj1T4mk3hBXRJaGmd1QCcw53yYGCA2B7seR0lnp/FGp2Jr2p07Nq6xBijlaKGIJtcHESMpGDtKhVAPOfu+gqNTqx1IQOwoXuGEYZ5M4ZnxySTnGT0Da1hdJDRy6c0jMT2mMsYR8Y5Pp7n7ED/Pqi3kkrQuTKGoYzYY2gv6ozw3bkt2l+Is0EcQleGEkZLtIkYjySScHPHHvjqyJrjXFjgldHnIdozGrQm2sal2haP1AFgCVZScEcjB55QvxFrMck0tNuxDuMnaRS8cJc87C3IBPtn36O074rdLNaXUayOYpRKlmoqw2I2/1mUehh5yCPfyOpbTWEbjby9/vLV21Lgb585dbdfSbDxyLHZmfC2Ye6W2zDbIRFLGjbcEq0bYX0sBg4lyPZjft0IxDWgrUJpOyywmFWkl4xCEGGLZx5yR+nkCGbZFSaN0sVLE1pIrsTME2WXjlWuykl0bcpx/vHBPtPqEtFL0EMm5helrJFWhcRyyys/beOJ8HbkgF2xkAYHL80QcZFecA5mzua/EN/t8cSqatpl7Up4plBr7nkjEWomKu+e4E3JgL6MbTyPJPJJLMqlXUtMSGK5Wk7RdxCJt0edjKXKFTyPYHJHJ66lp9yrHc1TT44LLWN4EdfSYpo98ca5eKVpAzkgHIzJzn2PSzX6+iEyaelVpprkr15bjJGWo4U2EqxSBShc7WMhBzxtzgZJld4bCwJqCoJi/RNWrWa2pV4K/ZitdvcyyIrVGryI6TSyhhJn33Yx6Tjk4Fg0v4y075SA3KdXM7TRx2YRAgfssyGa0HOQW27s++eB9aLp3wvMbUksk8hrQSBq0tVcSTlfUGUMDgD9DyOMjnpzY+H9PrKm2BiZ2LMZJHldnHPqZWK7uTx5+3Q7ayuqwhWz57Zx9RC69DdaAzYHkDkfbML1v4lop8P6iKM69+5NJp0UI3JLXickyFkfDY2ghTj+IfTrl/Vm1fTJDDXaFgYoVlck+pn7rmRpGccn2/YePcqE0+RpIYgHaSeRIodmwpI7naAsgYryfv0V2XoUCu+n34mJPKB6zjrcLbttLD8LUIrtK6zOitDNKwD7gHIhDhAQMAnDEZ+nTi9pEdeXSIq4qzyWYp5BM0s3y8bFQe7OSANqDgBfOT+0HwpRtVtN1p5qrSVp7entEzbxFKKkj/ADAOwiTCBstgeAw9+rF8WRG5p9SSOSV44wkseZYxI8CrkvDTRdqpjGMnkYGOc9aajWXIxoLbDbHv1kVaath3mN5zmTsJJKoss+8ks+3jaCXYcgnOMYOfB+/GdEIlqUFKtN3QEqFjXEfucGQ4GAfHJ+n8POdWFbtyGZUuo5mXfb6WdvfjAHTvSG+GpI1htwtJcnl7YDJNsCEgKu5W2/rx79LGZJEDAYySrIeWVhnKnHWis9aSN4GAmADISocJkEZZT7fb/wAuElT8DZna6lRqKiASD0x9pcNWtaAhrQajGzdtO5AkccrEZ9BVDEeDx78DjkdUoyPIABGsahsgOe7IRk+nztGP1b/zlsSsC89t3kmlChUxmWXH5VUDjaPb2Gf56GnfdRJOGrRPn0QRiSVVyOXJIwOR/wCx17U3hj7zBdJQukXxtk/Sa9mJZI3YSSbCGVZCrRZBypMeNpx7ZHXpQ2rQSdyfnJpCrIFjjSz2dlVSijG0MEBBJBOM/TqMaRWstZWnec3axCSxmWCWSKUqT25hExKnII5+n18QVLpjOLBxJFtkRiCN3aYNhscbgR+/VFJB3G8iwUapTjn5/vLHVnusV+VuR7tQ/HERozREPGFmXcxblWBAdlzkY9+eh9bg1KSq82oqITUlrCo0Dfgq7uqYiU5cDBIJJJPnyBiFp/jiuZpFEOpaPDYmWGpaqQ9tIEkKoqWa/wCMjAYCsw+569vakNZpVoa+96s1mrJGJNxsxlQS0FgjOWRtozzkcn6ks1bAqfKJHyAcgbg9QYn7Fez3o3Z4isksT9tpUaJ9zH1bcEEgbsg85/brnV9aotzCn32rFiIHsEPJMoJTuZCjgkHHH9er1F8PXYdS1lTZkGmWJrAVEglnLQAuy75GKouACM7jwD0Onw3qM3xNVrXa4SOzFuoBWXtPHUEbBYmXIxtB/rgY870IKnYg5EGsyygNzlr0b4S0ius1C3Eksdn4b0yOyynO6zJZtSTMjj3UhQv02jqjj4Ulq6rrumWsvFSqw6lHKFx3aa24YXkH0wjsT91667FTZ7sjmRoSJIwWhlgWO0jIsr9qOHLhVOUbfyfIP1GuU4bc1q6iiWzTW5piVRNDCbO2RSYy04MWWxu9QOAowPcRxWq/Cest4CM+U5Jpluxomo39IsOrRCeSvtfmCUq4xnkcNgFTng4P36sVOs17XdEtzMwiq/PoleUjKPFVkmVnXwW34D4HIAPAOOo/jLRVbXKFiARXY7nzFiftuI1eKHtQkBgQNx5xg4z9vEtQx0rVeZcrEhTeJCxIO1o1dgcngMQ32LftFjKrAnmeclVJBHQcpaIRrMGlQtcm0CCpdqKsc9+1JTsPHIoYh3THq55IJ8/sE2q05qenadaOo0bmnQ2xCv8Ah7h4a0kgZAybTgnBPP8A8mh61X1i5qt+OQzyim4rxiRiUgjCjbEhPGAPp/n1HBLqEFezpMqCGtLXuWXVR/ppooGdWdvJxjgffrdaauYO/OWzcBkr4fPG06pHLozWdKqxLDNUNmBVdgjxvHhoAQeVOS3H6dGXvh2sszSVi/y8w22IWYsEHtJGWPIH8QJ/QjHHPdDeSPTdP3tLmOVnj2qFlVe4D6ATyRklf1HXSKBmqtd1K/cjeCaLvfKs/wD1WtV3YWezZnOQWAOR98BSVz0nSkEtXgbGMb3avhsyRkZlPs1WhaVO+kjKglkCMe7EkjBIrDg+pd5+vJzk8n1SaDoOkp3b+pTyIjRAzU1doqs8edwkmIPqHjgYAI5GfJJ+IfhmzXvaZXtPLJYjsmCUac8cLy7C6Kk8jd0ldq4JQZA+/Sky6bcMNTUxP8pUr3tSmrxWHVppEQukLx5yEBP5gDkfQ+D9MllNvdqeHiHp08v7+Mx1Fov0/G4zwn7wnVPjWvLqGk6fpqiKolhIDLGoTEbL2QI1xt2c/TwPHTKvU7bFIKzvI4y4hUu+1TwSM+Bnj+g6qy6F8OW5NBihthLWoxzXZ5YWxHDGrsqxQh2C7lCknLeT7Y5vJsvp1C/NFFNIZLUFZ7bSV8rEFViESJmG4AscA++SfYM7Xq0IIUZbp19IoRbNTjoshESrG1ueevXqwRvKz3FZhJg7QBCBnk8AnnPgHrOlGv2e3JSinq3Ur2Gt6nfNWI99Rn0ht8hQgHHqAGTjyfOdLLW/EHjcN8if3hKAVeEY+f8AUJuGWJxOsahZIkaVBJ4sA4wmRznjHHXr7akbTzNukAyQQQDI3g844HsMeB56F1m7FpMpW3WeTU3WKxWqxvG7QVwHH/WGViqluTwG9vrkKbGsXLs3/WK0NdV3EIkr4J4wGMhbgjx7DP36AqqtWsFhHqatOPgUyx6ZGO8lu1jfO2yLf2lDTthljhLuCWAzwoJ+3Ay6n1CCpYp1OzYkNpHkM8ajtQqvjLHncfYDn36Wy0NK1d/h68EaRdOd5YAr9tI5iImIsRhTkgqGXDDPvuXonXdNmvafOr2SK5VQY1iRX5wM94HdnwcDGRkHPt7gq4lOck8/SBvZY5bi2HSeadpejpJfsUEUJbtvLNKhcLZkRmyyksfSGLYAwM544GFZpQ6hq19Y0ZIxLM0co42SZOxo0x4LK2D9j1rLam0vTtpuMN0bbERu9Ou4hMyNz5yd3OR5/MR000qhqVKGPUWhhljkPzUp39qQRRoyxqA52bVXgcj+vVm40cu+8kKoUqpA/X94JX16VTA/+FXY7Ugj9dKcLHakCgbgkkTEZxyVb+eOgLCSNcdBthMdlZbEddGWCs9qVUaRpPSWYsy8/bwB1YdP+djj+eNZa9eCNoYZbbAsqP6CYoIs5ZuAvq8f1rN9J7OoajWlLGDclO4MjdJLGPmpVXYOCoiVSR9Tz1pSHsIDHaQ/dqTwiWY6Nqmox2YrVowwSRur/Lyl5JC6qjEbvSFxkD0nhjwM9VOW5Y0DXI68sCzRVZ42WalFFHYzPCkDtIoxywbzkDPOPYOdA1a3UmpadfsmSvY0+G1Xszel4x2yzxO/ghSrgE8+POeqhds2tV1K7qMEUkslrUV+UhRC5aKIbgNoz7bM9Nuz9KbXdW5AfLPT9Yt1V3dKPUy3wfEd6rNNVk0ayTFtCW4NatrDaQDCyxrLG74OOfVwcg4IIGT65ZeCWOv8NCwsjO5im1S46ySNk5aNIVUk++T0x+SksykaasmnSSbikFuSau1lwMs8VeWMp+nJOOcDoCevqrtXr3bdk13Zo7axfnQqNxEkcSqzAjGMZ8+OMKMRZ/vw/QQhGoC8J5+eT9gMfWVbUNbSK3HWapDHJEFSw2n7jUjMpDEVlLFiAdoJLHJBPv04Fe5aqNYjqArt7Yk7xPb3/hu7KU8Y8+45/QqPiSGxW1K4raeIqkhavBtLDtxCPtqjGM7d4GCRzyPt1a/hrU2mmoQwQmWtfpo9zlcV7yJtmYA/wkr6h9WH3yTrtGBVXeo58/jzg1GoBZ6z8vhEjRneWnWOJrCpOADkYYbcbieTxzz9fp0NcpVZ1jLlCFZlLhsAJIjI4JX6g46tt6jNFN3aKqDXncJBOqMY5HUs0ahwVKtywBH8RI/MQVM0+r6x26skVdII5G2xwwRwo8uMEduMA54Gcnj+6dSitxlsEToPxbtp+4C5GPfvMjuUkXT5L6yRtHFZ+XspCqLDg4VJq4TaApG3K/1/1h7tmbVIdM068s7duxH2RDL/ANXvOPwo0tQsFyV4CHdn2IPkMJ4vltNq1YTiO5YeaBpFDiEquZAE5G5eQM5wST7cCUKMq3a8kzxtVpWFn35llO5XSSKWYwoSEOAMhcDbg49yLyK7R3R57n5xdpGV6S1++Dsfh0+U21GNI6ZrVdGmikV4hLPKTJZJLbNiKuEXJI8L/PqFdNvo1ezZ7P4sTP2tm5osySKFLE49s5A8H2x1enngvSwmvYSSSKN5+4g3QVcjabMrMBllG7trjknOAOQtkrd6NiQUWVQsSE8xQqAkasfrtA3fcn69L9ZeKq+M/CbV2vY3CfnK1aeGlVS1/h1N3oFLMYkiijc7clolcj3yTgecdSaPrEuv19RklWOEC4u6vXAEKH5fYHUEZyQWB/3c9VDW555Ll1y7sKjQqYmJKbXiVZMKeAdwJ/U9FfBlpTqOqQrkJYqpPgeA8TheP+Y9dFoez1StHtOS2+PjFGr1RLFaxjG0Ya+2rRajDJBsPepJAghMNVmQzBZFym1Mk4Pj9hjnOnOo6VV1LstLJPDLCrLFLAwDBWIJVlYFSP26zoizQEN4FGIKuqBHiO8W6qJRqGqLHFZtaxqU6zVov/CURkMz7v4U5Uj3/vWJJGV9stqQ2UY/9iO4R4CA7WHPBxjnjPV81OnqF2va1ClaCXvVA5iaPuPVsHuyCNwzDn+Ej6nkg9U+CpYmWeGlAI46sUstyRsFUSNVLlg2GOdv8R8kYyOlylNyh2+3v6w0h+T85Y9KuWdTnmko1pqjuEe1ce08cAkZQSi0guCc5OMgDz/F6nM2l2bDVzNqNuwY9n52RVDZ5dY1wgP6D/1okFy/FCYxbsBN7ELG3YKnPlgo/lk9H1viLW6jKZJRah8FbSguPpiRfV/U/p0v1FJL/wCPYe+sc00XcHE3OWw/DsbQzlpFEhAUMzmQ/RWJwAAD4AH8unMFuOxosUdl0jGzs2ATyFQ+oY8+xHj+/SWlrlK9D3EYpIM9yFuWXGeePIP1/t1pTXSDcSS1HNYSW7dbtLWaRNqEgMxUEnBP7Y6GXjUkHbMyfxbNviPbcdrUaR7gavSwr1q2Ns0hxhZLJ9vfC/QgnDLhUCRQprFN5BhbutEnPjbqdCJQf+Yt0wmk1COy9SlfPyDKklbvduxIFxzGrT+vg+Bu/bpB8QXYtOWjK7Fp2rUp6iAY32dPtzxtu2+BtIOftx54ZaUs78KDJ6TJFRQeM4H7wDUpLdhdI0mtGZbNmL5GREDNLEa8zKzqqcjdzn7Z+mRddC0yloEW2q0Fm1LkyPMsonaJRuZam1QhGcsQrMT9WwAFvw1TmeQ6hYhEup6y0uoXdg2QwVHZnSEMc7Iyfzc5IGMHqzWr8ipIl6Claq5UsdMsM80PPDhHO7cPIIIP05GC7Y92vdD5+v8AUT2MLX4+nSGPNQvJLTmTLlElET5w6kb0mrSrwfqpBBGPAxxXrm8WY688m6V5oYJJSdjTR7XkSUkEeoqzBvuh6OR0AkjZu5HApv0p0GHkrZzOqjAIdSO4BjhlIxgY6XXhJcuxVwrM0m6HuQEY2YLlwTwBjfg5GAwP65ASRBHmiEcmXDGQuWaaPeceSW3qft4Xx7/TfRIa2nS6vMtdY5cl69VHRI2d4e5I0cnPpYRgjzjPGd3LGexp1WH5ONdPSSMbowlhu8JI/UBI7LjP13Kvn9+k+rpAKczrCs8CRFWglwD2wTKsWfIZMMFI5GxcfXqjKbF4B1ngQDmMl1WK7J3Z4I68cca/NM0odZ6zMIyhygOULK6HPsfr0M0sSz2JI8xzxyFHaASLNLNGwIVGD4dHweCmecA4PVUq/EFcafTpXp5e5YmkTULiwRj5erujCRMUXc2Qoy3nP7lnUVszzQzTsIYJZoLcDKO60aTLviY4UsyoARx9c4+i/V6c6ezhcYzyPnC9Mxtr4huesc6pp8FmW3pRO2ScnUNPDYBWwme5EAf9Yc/uT7dI6V2SqXYoyyQSMiyqD3UaIsjbdoIOcYIPn9Oen01N2lrfLw11kLC1BdrzNIJREC26HfkEeONxI5B45avmWrJZ1EWZo6rJacsSfwhKx7jxsTjBGQRk8huPsHqGPd4xuPt7+kI04UMcnY/eWR9R73fida6gxrJclrSBjLHCcbNh9Y5wGG448ZI6Hl1CsIu4qs0jGVVjJUYZOAHwT5+2f6dLxdqiCWCuWnZkaAzwKFYozFyqMn8Pkefr+vS6xWtS/NTyDsVC0Q2pCyM298bF9K4A+2Ac8+MlNYo1B/yee39esOprCtgSufEVWRxqOr1IrDR237LmGGRoo0hC9ySWQrjJIH6Ec+eU/wAJztDrtAA4Ewngb7742IH8wOrXqh73w/qNJNTuYgsmevSihjUPHIQNjPnJTOWIzwc+eqLpkjU9U0yWT0di7WaTdxhRIN2c/bPXbaazwIAdhic7qEIdsjGZ2IOjYDJzn2zjrOpQhRuR7+3+XWdPM+UVb9ZT49RrS1bFfcKZeKxVini3rVX0qhKkkbCNyAq2MFgMk8BlEKVavDQrxAR7XrwRyPKDNHJG3dlsrgjAOMc4O/HGOltu18M2C8sWrVYrBUYmUFw5T1L3opV2OAcEAjggEEY6WUdQ02oZQ941oRBBIYKlh5qs+HEkSKjK0i7MbnBblj7AAFNraFOB9uvxEYaS5tz998fCTWtOvRPV2zRy/MJKURlEciQJIUjecLlQXwSoGeBngHPQEqTxySV5Y2jkiG6SOQYKcZ5/y6YyakNSkpijYQTvMiy2ZpliWEEck97MmB5ZsfYA46UTt2JdQqypJ84ZQVtTSHY9dWJDxqy4xJwdxJ4P3z0uNYYx5V2oybEeGSw3HrSh1BOTt243A8eSo848/t9+rTQ1CxTeuseqWKtgJHH2tRqRjYk1gsQA6gj0hmP3bz1VqWnSWzM0sVhY4lMsskNbvIqc43ASK2Dhv79PXlkADQzVmAHfkpzLbaMyMgiRFitB8Ec+G/t1Dqqj1irV657nLDYQ+78SGFd9nTq8uo2oImqEMVhZnAJkmQnd6eDwTk/Tz1VbKWLNtYnkkualbkihklY5DSyEIscYHG0Zx17qVF5otkQkjt1HPai7mUZY0VJDCx8sTjAH08dHfASyX9f0ySSHuJSlM8rHG3eI37X7lgPbpx2XZRQjNjx+f6QS17bwATtOn2FOm0o6EJEkkUMfzUh7aiSRUXdI+8hQB6Qgz7gAZ5VNFRPy9S3bk7rXWlkj/N6Y1XfgAAe32z7e3TCzLEYNSNqFZiXMZVw23DnblOM8k4U49/5QSXZTV0hBFZYw1EqtIYHfdYlkCPnb7hVYnn6/sp1hyAuce/7jPTDBJAkyaZqFII2nyL6JO8YJmYqWKhTsJyRuA2sPB/bPQiUtZmWdoHWoGgigWMurzbFCuyM6cKMgDzztH6dMZr4njV3irshbKS9t9oPIOQ57Z/5j48dQd95z21MTDkqI+0URV/jMaOyjH1MfH1HnoIXWKvADt9YT3as3Gw/aLQbD04hJYCQRSLVsxRLGY0lYs0MoJyQrgMp+jL7B/TJBXVzJSTL9yAGJeSWwrK8a5+o/IPvgeOvAqtPrES5eKzpthlJLFXlgC3IyGYYPKtg5I5PPUddmNuojEkMuI3ViW/DlOCD5BHP9OmWmsLoOLnBL0CsccpymxdMfdrCNhhmWXflckHwRjPXUfhulYXQagSjKdUmrstiayeK0ULN2403e+0KcY4zzyMBbquhwXdSl16YwL2KsfzabQFnvv+HFIV/KMj1tz5Xxg8PrutaTDSiqQtLMFTfIVkNeu/IJVpSC7DJ8AYP144v2jqLdSBWd8b/pMtME0+XJwOX6wqs9utW+bhmW7UnCWbVMCOKSCY8maAp+V/rxg/bORXrTwxarH8QVQL2iX0gqa3D2ytyu6EoliWFedycBseQDxzkD1dd1CImDTwkcZ+ZJWjBGThX3MGsTBuOeDu4/Q56AnsX0ZLLS5Dk93fOj9wZBIlEWAcnHGT/M9DaeuysgPM79dp3zjPyEtF9vh7TtQoRRtXJ1CBp1rwoZO1DyRZDoMBG58nnyPHqYCvXMR2xq8bKcYYlTkZBDcj9D1WKdR7Fn/EYqsaX5oZRPuZZTLKs3pRY42/DAUrgEjgZ59mjV1CBZMCECu7LblZ1jO90K4rgHYzDO4KM4xnHJS9o6Lv7g1Zx5/wBQqnX9xVggt9IFX0S33pC7V1URu7S7hIC78BcBgSRycnHkeccp/iD4a78EtqBNjojtXbsunzaglt/cJ2nIyBgD8p+uCfbaNJ5gopzKZwsC1ozFC00X5vSCD21IxwT+oJx09qVtS0mnM1m7FYTUrVfvRyxBIKsuDthhEQIRW4U8YyBk+rPRuiTu7fG+c8un5zSzUvqa/wDTA98pTvhr4qjrVFr61Ivy8Akjrzhu5ZHbVSIHgXLkc+hjgcEZ49OdUvUYxFf1CIDAjtTrjjjDkY4JH9es66RbmAxFZrUmDZPXnWdZ1jLz0EqQQcEcgjo9NY1RShM/c2B9gmRJApfgsNw89L+s6gqG5z3pOkfCzjWu9NNUh0ylT2CW9C3ZpmfGRG8ZPrkPBAHjyc5GbTFU+DWkNe/HPatyziaOa/Xmqx2CF2LDHg44znGQSecYHEfw3pUMei6DZmWOtWgjrzlZtq7mK92aR2fGWdjxzwAAOmOpNWtVLs9h800RBGI61hokGfzPIE2k8+x+wHSx7ArZRc4hNemr/wDZxFur/DlB46tjTpRJBFK8UqzySM4kLE7o2UA5XPOfPnJx0XpOkwaE8AVES1ZsizKFJZye05DSMfqdoUDxkn+LjTT7iyR1qLx3Jpp0mZBs2SSwdgpuQu2dwbac+Bj1Ec9EiWSKajJK3eaGWOa88fqH+iMYSH3IXJbPvgn7A6lUI406yrHA4NtvSAaobEc1d0aP5eyteOVZP4j3FZuF9XAU4542/wC10I0N+1JdliW1FdoGSzUEKxtbkmjUsqx9x1BJ9QwOT6vfgH6vCfl5YHdVauWaCcN6WEgUxnJ4xnb+0h+nRV59PaggjnWN5q9YMsjKGxLJEWbcCOTySCDkjIweSDqAFt4mhtTE14WRya1FBDYq6kj07NmBZFFmMhJJWw6APGXIc4IKsSQRjcQeJLGsabUinSx2pLW9I46cAj7J2/irNJK2YhnI5OcbTgHHUlTRtP1OxXkniimgVhL6izKec+WOTnx9PtzyLWoaV3J++I4h359kmFCLiR8qw4GPrgjx546FNgPiA29ZqKwPCT+UXVp5p9WtTWLMU9hqepCQ1pmmjVI6kuIwVG3aM+nn9uc9R0YwtmBi/qTa6q/oG8xGRgq8+CpHn/0Yxw1obmp9uSF63Z7O5WLbu/IiECRjjGN//sdAaZFPYiE5LCTvqIGDEnDsZFKk+OA5/QffonSguB8T7+kz1BAJPoJp8RQWlZo4ZO3TmsC00VhArCXJRQylNxAHC4yPV556QxWTVbdPDEXjwRNOpMkJ5besMm5Mj2yn0+nVy/xSAU51tMklTtGN4pduzfMFSNQB6MsWXaQB4P0wEkVCtQs1Ll+FLVTcs8y12DhivO5g+crnlsc8eDnnbUrgjxYBmVX4ZkK3ICeh6w6n8K379GjenvxQiYrLDXmiYMIHBI3smwb2G0kCP9889aWtHn05I71mapLVhmaGu9dX7WnrIeJVibALk/ky3B9yXySbWvSa+4r0CIFYCGIPM8MsrSfwRSvB29zjAA3D2A89aLp12KnJUp2LMZuVQ3ylwRzLZCMJD8rPk+sYwQSCMflAGV0YoBw4284uOmXDWV/7eW+8He9vwtUWZZJI2YmWZ5bssJfssX7ZAB4LgcYA/wBrmKaysS25Lt2OBpYY4WqVgGIhiUECSaTJB5Puc59sepZJZVUeOCQUoznvzuW+ZmYn1BUX8TH1zt+/joRJ9NTcITEWOVM1uOSxICRjKQxAxj9yeqppwMkmJ7Na9wA4ekY0Jqn+KaNHuiEJngjw59csk26ViN+GPIXnHXRmo1pUnLRgmZdkgJO1gR7rnHXGflJNU1/TbEVyeQ7Es2ZzE8TwmsQBt3jHPpA/Xrrek6qllRWnZFuxL+JHnHdUcdyIHkr/AG8HxyJeEFpydyJ0ehVhpUwMY+8oy/AFGXVL8tqeQ1o5UaOrESJJFcbg0sp5weRwMnB5HWdX+2iRyxW8kKo7Vj2xETkOf90+fsT9Os6baS1WrHFzEG1CMHyORnD9B+H49XhtTyzSRpFKsKdoISW27mLbvbkY/f6dMn+C4c4S/KPpvgVv7OOpvgqKdK2rSsCIZJoIo85wZI1cvx9sr1bIoZJXRVAJY7Rk4H/ETwAPc9OaKajUHcRJqNRctxSsymj4DtPFPJFqUGYyigTQSoGZgWxmMueByePf79RaF8H6hb1ulWsrE1GN+9anikDR9mPk4Bw3PA5X36vF25FGnylfcyx7i8kasXlYgFwFHPPgfb+rrS9K+VqpXdmiu6uJIZGHMkFdYnkZFP1A4J+rf7PHMXavjuKUjwzp6tLwUB7j4o+02CB461tolEkyK8e4AmCBuUjjB4AC4zgec56oli7rN/WmOpqyRVJpoEgy/arTFnWDcv5fWFbaTycg55AF80+xhIqNkdq5XiSMqwKrMqKFEkJPBH1wTjqDVtFi1ESSwyCC28AgeQrujmjVg6LMowfSeUIOR9xwdbqi1fAswzvmIbF40i1uVdsdrTY9PaYcCB4pWkCt9FcEgn6qM+eJoJUntRVKqq3zRstDIpQgRWERe4w85QBlwR7jBO7hRbm1SOO1QvVe3OkTGQBRP3FAOJYFUruU487uPBHGOjfh6bR9N1HUKUKRL2NOhenKGVmvM34tiQnxuJ2EAYGBwBjqNNYccLdJ4ia/EG/5OIr/ANnlaLJIJRI19JXOMcAKCM/wnjjkKlpUcqGQxiV4YlUAqJtxhPbwVVlfPsCrA8eSDtbXWnty27MkHpAMFaVVb8JmlO5hIONxUcsceSMYxnp5FWkq3bFWqD3YkrWYTgF5ISUqzg/8Oxv1QfXke8i2zhU7j+/3h1Wa6skbHf8AT9oB3rLKVpWLCOCY80LdSy6kMOPx2hsgjHIKn7/feSGVO81xbkayZftzS0KsUfGSYw00kgzyWITJOT+jV62nyOm+GAslm7RjLojFZCQcgMPPq/oOtWq6VVisJFBBGaEl2RdqKGWOKUIMuRu5Vtvn36Hagk7n37EuLtuUqFiCvXrXVgVIxLJJYZlEkjSdqHCFmk9RxvOM4zkfu7hCwQrGpIVI2rq6t6ucRTOuPfAAz9DnoXWaklcGLey/MpLeESj0iKFUDB8jO7l2x7bOidO1WORRP2mSVUgmt15VWSCQY5liJGRnn9DjyD0dpyK27tjv7/v5zG5S6d4Pfvl8pXtUNmC3Z9deSCWKuIoiEdQsQUrKUbJDBslTx7+R0+EAGk6Y8pAb5dJB4yASQM4/bpdZSHVdXvzBSKrWtg2KoDJAojdhjjLHOP1+3Ruo24zLQrGWCI3J4qVSJm9Cu52hpNvOxf4iP04zkDXsbCwG/lB9gRFtOqJamoVYFVe9qfy1UnC4wPmJJMnwqA5J9gOr3YppY0qXeWQvNLdikwRJC8k5ljlX3DKSG/mPt0NpOjVYEjCl54UB3zzKFNpiwciOMcLFnnHlsDJIUZO1jUKtOs5nmWGLIV5HyRknIUBQST+g9ujKKii+LnMycyvnS9JuNDrE9OLMocaqkaAslpMRPKDjO0EHcB7EN9d06aRQGp01jUNB8vPPsJDISBGqEEeR6iR17ol+IVO9MGgF21NNGs+5MH0xhC0ir6xt9Q+v189HrCKttLcQdoBC8T1wBmISOsheEft+X78fRltyq1mD0h1RatfDtmR3qNRgyCNU2rkGMAEHz7dJaFeu/wAy1lEdTKqKSdpXtZ9SOCGByTggjx021S5FHWsWu4nbIYpIThDjgZP9+kMV7s01uiOAUnXFeS4GPzCBiHljh4YbmG1C3n1HAAyddGlaO97chsPn/GZTUvYyLSvM/QD+Y+itQpItaWzHIjkJFLK6ByzZxHKc7SxwcH3x9RznVFMt21KiJ+HGNqptJcoASVQN8ucLznAIH26zrN1DsWUYEupKjBOY5U1fkxKjzGURvauIkH4IjDEy2I9o38ZG9OWHPnILkK8U4nq0JoHijCi9cJBGCAwCoTuwQQRwAeDk+6vT7cmm3BucGF5VyZGIjjcjt/in1DawO1+RwQf4R0d8G1lsDUpLFZc0pqmkQLMqtMsmnGY7j75HcVAf9josap2r7uwkqOnn/EG/DIlhtQYY9f4849o6fTqR/MyrsSMBw0xzI2MYeUn9tq/0zwJJ6nxBclqWqa1qjVpGkgbUDK0kgdDGyyV4BwGB4zJkYBwPHTKGFbNgTvhq1VyKw52y2FOGnPsQn5U++T9CINUuyKrQ13IY5DuvBH2B/v1olRYh228h5SC+AQOvMwW3q6V2FXXNPGBhzNQf5uND7MUAWdT9wp/XoipqdedO7p16HUa4wGi7g+YixxgOfV+zD+XSBac85cqGZgJJHPvheSegxpMFi4kitLBZljkjSeuxjlWZULxMWUZ9ivPBz9uickTLEuU8Ola3C0MgJeFg4B3RWqzg/mHhh+xwfv1R7lEJPqGmyV5Y7lecHTrktcQR38KJfwXXg/RsHzzgeFn/AMR1Oi2nm4WsJNWknguUwBdrtEWSVJIwMMFwScLyM+k46dJPpvxBAkU7x/MojrXs1lQd0Aq++NmG9XQgMUz555B4xsrW0ZGxlwSsRQTRN8PoS5exNPZnn3Y7m8zhiGwPPnP3z1bD2YNVoWHdFD6VMg3HBJ3xEn9sDP69USR7EFu/p9lPxy7ysIwV7kgIMjRY/wBYYkA+j/bi0y3qOrUonrSJ87RYTRxMdsivH+ZCMZwwyDgf26UUv3Vrd5GtimypSnWWWRKMgzLFC5LrJh0UnuLgBhkeR9egpZacM00iRRJPKuZXC5LjJcsSeMeCf88dVRPinA7dyFksw8N5ZCUwwII9mX8vHkY8HPXkusQWneOuktqQdkqsaMO4N5DFpHHp9J/n+nTkW1Y4uIRf3FuccJheoWoLNiY9pnlTT9RqxSM69sLPtSWRhyxIBwngckn6CsmWzLFp0dbHdljrVVAYELHARJJLJwOAcce5x+5Qtx1p7DyES2paz10rwKSsY5cu8pO0Ac545690rTpo6JuzSpAJy8cTAbpX2ZzHBvwoRM5ZzxnPB4HSx7GvuzV8v1hjAUU4fmffv1jIaddh0qSehHAuyLtVnsymM2SfT+DtBJPkgkjJ/wCbpzQ01/ltIn1s1jLRiCQPPFCbDMxJOXYZA9gB9Prz0pjvpXSEQukccMaww2bCkxxp/wCHQrycnPkuwJPn7DaXWq8GTFXtahe7sMJlsnaXmm5CIW54BJwFGB+vLKqpavjFhJMs1rUXQCOpD3ZWDAFiI4YlA/NK59v0GeqpNYjeWKxNYF6+8XchSP8A7NVVjgbduVXP1yWPS+ra+I/ihbUUcvycSXjWaOBQuIUTMqyL6juOccsB+vucteKA9pEVY4wFUL49PWxz0kYnsGk3HSS3F3u6S7zWEwe4zsWYSQvmNh9ipwB7Yz0VQmtCZIIDHDOlaWWaqDJ8nYKSIokg7hLJkE5AJAI5BBDF3otndGYDgbfUv+fHSjW69irOlirL2ZUlBjl2qVjjnxHJuVhtK8gnj+H7dD3V8a5HOaVvwtvCpoaNupfnEMcdtYpQHlTc9e1ARIu5VOMggZI8j3weqi9i3aGn1WKqadSslhIrTKqzdsZixCjN6eRnPnJ9+m0eo36h1KtqUZexMGnDpFiFkgjCkHt/UhQePB+3SVAWhALkmV8nLswaR2wBt3uM/bC9LU8fh6Q2wcB3h9KKOWZA2O1FhpGMluUAnIwzyvtGfH5PGees6NqrfoQGJqUpYsXZ41V1OTgKBGzNgD7fX69Z0cmoejK91n5H9oG+nW/xd5j8v3izVaM8DgQKxr9omLBkaSPHDJuLFiBxj6A8+M9OfhqSe0kqxBkmtrG1qZSCYliJhebIx65AAE487m/h5PsVa9iMwzwiYSOqxxZILyH8oUjkfc/TPRNK5oOkxSwGbbIJXE7rE21nQiMhMc7FJVFz9vu3RN+lUXcY5TDT6hmq4TzjeYx1a6RxKqKqLFEi8BVUYAA+3SSUDx55yfv1vY1jTJ2kdbAKRSpXICsWR2iafDAD6Bif0I8jHQj6ppO0M1g7WyVPalO8AsMqAPsQM48fQ5OoAxJh1JBGl+THiAqP1k9OB0plPaso4/7uaGUf8Dhuf5dHrq2k/IuyTNt7kbSsYmG1GJRSc84yCDkDkeMEFlklqi86ESk5aT/u5AQIxuJKsoI+3HPtnHEjEkTSxthtQ2F/+13jIgGOEktuj4z9VJ6i+IdE+Rux6np8hr1rMyxTCMemvb57bBRgbW9vocgHDADyazUkhtqHLS2ZlWNDFIdx3lgpOMfXPPGRnz1abUcdhbNGY4S5XjTdx6JSo2OM+4IBH6dZcMnOJSrsslt9LtTqsVvMmn3TGy7+7GvfgliZ8AkjO3Pkek/ZjUr6TqjpBeU19TC/hWajNF80i+nehODkeGB5Hg/dbqabRWabCK8kKTcZKSxdzB/bc4PHW0ymOOMEMyk96SBWY4KjatqjLnJP1HBGMfTpJrWCW5I6bxxpAXrwDjebapok1SUSLILSlDCQ+EfaBkMxHB/p1BFUNRWilYmSdd/y0J2s0YHDTufCjk84/r1KNR1a4ksfdQ0oGVP8TZG+YYkYEKxYIZxyNw8/TgkapGpVyiARbgXad8q7j+OzJnLH6KDgfXPS12AO3KM0LMoDGQNWklOn1ol2jULcVZpUBXMEeZX7MYGdigE59yP2DMrJq9uvDAVhoxWFoIuSVSCqjuyKfGxAvqPuxPsB15W2ieayHkaStpmoyiZ8KzPMIqi9tfYDecYA/wDMqj2FrOIxhITYo+n+EO5aTH/AgX/9zp52aP8AFxdTEevz3uPKAGnRazXsWUBjitJY3Pu3rVrhrDscnO51U5z/AK2P1kFYCDUrks0NeWCGWKOaXIiTVtUOWf0+omNSiKAM8jHjqVQZZwCu5RlpVAHqVjuK/uFI/fpps+SraYsgDyyTPqE4bDZllfeCc/TgD9OmgXfEAi/4S0y1os92vb7Kz2yItsLMyxiJW2+pgDk5OePp1vYU951x/Gf69N9RBju17KcBwkufv4P/AL+/QMiK8rN98+3Vgsib0d0bfQ8c/fprdjjt1SzKGGxkkU/xKwwR+/S+NMH9R0dA+zchyUbz9s9exiVMrlmN7Onyxnm7p2Y2LKH70RQhGdTjIkXIbkepTyCuet9KrVdla1nuyNGjRu4P4YYeEBJx/PorUIpKswtQozmNWWRE5aauxDMij/WH5k+4I/j6U0J0gkaGNlaEPugKnKvBL+IjL/P+nWOjoVb2UjnuP1kay1u4VgeRwf09+sshA4OQB/l1nUSShwuOc9Z01wRFuQY1o1HTFicKZmBCAcrGp9lOB59z1vbEManbFF3Jn3Me2u4nGwuTjzjjP0PWdZ0vyWbeM1UKMCBlBhV2jAxgY8Y8cdbwxGSRUAwGO+QgY4H+ft1nWdaHYSJvaI7j4UAKPYAer6njz0uAYsW5yMc5PnrOs68olhNDE/chgBI7ltAFycdpcMQP5f16WfHU3xTAlL/6eWXvGQG09cI1gIoAjVFYE7Sc7sfQe3WdZ1GN56aanFf/AMNpS6jGoukafPejRUKtPJs7qDadvlmzg46W2u3HDHXRjNVsuiRfm7lOWVgu1wwDD7Ef/OdZ1zfan/1Uen6x52d/offSLNb1iWDV9O0eOF0pQdvuSICQA6DcypjBKjj+nvy5SOWQJLIskMO0Mj2sNO6c8pEAI1H09Oes6zoW2pRXWQOYm9djcbDPX9JLVZ5LEzFCIrFQwRKQS2yO7VZmb9cHo415qlaCq4XvHvWJ9pJHdtymXH7IsY6zrOnnZwAqAirWHNxh+j0I5lmkmG5e4pXGRwgKc4/4uotWl7tiQrysa7B75x9us6zpmBvA+sZ6hAzVKhH5o0RT/wAg6Upnn6jHnrOs6lOU9DEPA+vI6mVsekjyeOs6zqplDI5fWrK+QM8eeD7Hqq3qM9eY2aqFlyxsV0BLDJ3GSAD78sv6kcnDZ1nVVYq4YcxKuodCh5GFUdRSRU9QIIBVl5ByM5B6zrOs6f2Vrmc3TYxXHlP/2Q==" style={{"object-fit":"cover"}} />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Noticia</a>
                    <a className="text-white" href><small>20 de Outubro, 2023</small></a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href>One piece Comemora seus 24 anos de existencia</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h4 className="m-0 text-uppercase font-weight-bold" style={{"-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-text-align":"center","text-align":"center"}}>Noticias da Semana</h4>
                  <a className="text-secondary font-weight-medium text-decoration-none" href>Mostrar Todas</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-3">
                  <img className="img-fluid w-100" src="img/news-700x435-1.jpg" style={{"object-fit":"cover"}} />
                  <div className="bg-white border border-top-0 p-4">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                    <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                      rebum clita rebum dolor stet amet justo</p>
                  </div>
                  <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt />
                      <small>John Doe</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                      <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-3">
                  <img className="img-fluid w-100" src="img/news-700x435-2.jpg" style={{"object-fit":"cover"}} />
                  <div className="bg-white border border-top-0 p-4">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                    <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                      rebum clita rebum dolor stet amet justo</p>
                  </div>
                  <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt />
                      <small>John Doe</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                      <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <a href><img className="img-fluid w-100" src="img/ads-728x90.png" alt /></a>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-3">
                  <img className="img-fluid w-100" src="img/news-700x435-3.jpg" style={{"object-fit":"cover"}} />
                  <div className="bg-white border border-top-0 p-4">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                  <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt />
                      <small>John Doe</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                      <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-3">
                  <img className="img-fluid w-100" src="img/news-700x435-4.jpg" style={{"object-fit":"cover"}} />
                  <div className="bg-white border border-top-0 p-4">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                  <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt />
                      <small>John Doe</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                      <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-1.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-2.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-3.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-4.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <a href><img className="img-fluid w-100" src="img/ads-728x90.png" alt /></a>
              </div>
              <div className="col-lg-12">
                <div className="row news-lg mx-0 mb-3">
                  <div className="col-md-6 h-100 px-0">
                    <img className="img-fluid h-100" src="img/news-700x435-5.jpg" style={{"object-fit":"cover"}} />
                  </div>
                  <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                    <div className="mt-auto p-4">
                      <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href>Business</a>
                        <a className="text-body" href><small>Jan 01, 2045</small></a>
                      </div>
                      <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                      <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                        rebum clita rebum dolor stet amet justo</p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                      <div className="d-flex align-items-center">
                        <img className="rounded-circle mr-2" src="img/user.jpg" width={25} height={25} alt />
                        <small>John Doe</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ml-3"><i className="far fa-eye mr-2" />12345</small>
                        <small className="ml-3"><i className="far fa-comment mr-2" />123</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-1.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-2.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-3.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-4.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Social Follow Start */}
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Se junte a nós em suas redes sociais</h4>
              </div>
              <div className="bg-white border border-top-0 p-3">
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{"background":"#39569E"}}>
                  <i className="fab fa-facebook-f text-center py-4 mr-3" style={{"width":"65px","background":"rgba(0, 0, 0, .2)"}} />
                  <span className="font-weight-medium">345 Seguidores</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{"background":"#52AAF4"}}>
                  <i className="fab fa-twitter text-center py-4 mr-3" style={{"width":"65px","background":"rgba(0, 0, 0, .2)"}} />
                  <span className="font-weight-medium"> 400 Followers</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{"background":"#0185AE"}}>
                  <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{"width":"65px","background":"rgba(0, 0, 0, .2)"}} />
                  <span className="font-weight-medium">780 Conectados</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{"background":"#C8359D"}}>
                  <i className="fab fa-instagram text-center py-4 mr-3" style={{"width":"65px","background":"rgba(0, 0, 0, .2)"}} />
                  <span className="font-weight-medium">1,239 Seguidores</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none mb-3" style={{"background":"#DC472E"}}>
                  <i className="fab fa-youtube text-center py-4 mr-3" style={{"width":"65px","background":"rgba(0, 0, 0, .2)"}} />
                  <span className="font-weight-medium">2,345 inscritos</span>
                </a>
                <a href className="d-block w-100 text-white text-decoration-none" style={{"background":"#055570"}}>
                  <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{"width":"65px","background":"rgba(0, 0, 0, .2)"}} />
                  <span className="font-weight-medium">1,345 Seguidores</span>
                </a>
              </div>
            </div>
            <div className="mb-3">
              <div className="section-title mb-0" style={{"-webkit-text-align":"center","text-align":"center"}}>
                <h4 className="m-0 text-uppercase font-weight-bold">Anuncio</h4>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">
                <small><a href="https://albiononline.com/home" style={{"color":"gray"}}>Jogue agora mesmo Albion Online</a></small>
                <a href><img className="img-fluid" src="https://imgs.search.brave.com/wuIyrjkK04VAIesUAZKOmZossIx6ProsjjOuHMTNQSQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNTY3/NTE0MC5qcGc" alt /></a>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">
                <small><a href="https://www.dragoncitygame.com/" style={{"color":"gray"}}>Construa agora Sua Dragon City</a></small>
                <a href><img className="img-fluid" src="https://imgs.search.brave.com/ekwxPSCWlxKewwZYncZjqyclrn771C55DtmK8pyXZHQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nYW1l/cy5sb2wvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDEvZHJh/Z29uLWNpdHktZnJl/ZS1vbmxpbmUtZ2Ft/ZS5wbmc" alt /></a>
              </div>
            </div>
            {/* Popular News Start */}
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
              </div>
              <div className="bg-white border border-top-0 p-3">
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-1.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-2.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-3.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-4.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white mb-3" style={{"height":"110px"}}>
                  <img className="img-fluid" src="img/news-110x110-5.jpg" alt />
                  <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
                      <a className="text-body" href><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href>Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Popular News End */}
            {/* Newsletter Start */}
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
              </div>
              <div className="bg-white text-center border border-top-0 p-3">
                <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                <div className="input-group mb-2" style={{"width":"100%"}}>
                  <input type="text" className="form-control form-control-lg" placeholder="Your Email" />
                  <div className="input-group-append">
                    <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                  </div>
                </div>
                <small>Lorem ipsum dolor sit amet elit</small>
              </div>
            </div>
            {/* Newsletter End */}
            {/* Tags Start */}
            <div className="mb-3">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
              </div>
              <div className="bg-white border border-top-0 p-3">
                <div className="d-flex flex-wrap m-n1">
                  <a href className="btn btn-sm btn-outline-secondary m-1">Politics</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Business</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Business</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Health</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Education</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Science</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Business</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Foods</a>
                  <a href className="btn btn-sm btn-outline-secondary m-1">Travel</a>
                </div>
              </div>
            </div>
            {/* Tags End */}
          </div>
        </div>
      </div>
    </div>
    {/* News With Sidebar End */}
    {/* Footer Start */}
    <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
      <div className="row py-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
          <p className="font-weight-medium"><i className="fa fa-map-marker-alt mr-2" />123 Street, New York, USA</p>
          <p className="font-weight-medium"><i className="fa fa-phone-alt mr-2" />+012 345 67890</p>
          <p className="font-weight-medium"><i className="fa fa-envelope mr-2" />info@example.com</p>
          <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
          <div className="d-flex justify-content-start">
            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-twitter" /></a>
            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-instagram" /></a>
            <a className="btn btn-lg btn-secondary btn-lg-square" href="#"><i className="fab fa-youtube" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
          <div className="mb-3">
            <div className="mb-2">
              <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
              <a className="text-body" href><small>Jan 01, 2045</small></a>
            </div>
            <a className="small text-body text-uppercase font-weight-medium" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
          </div>
          <div className="mb-3">
            <div className="mb-2">
              <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
              <a className="text-body" href><small>Jan 01, 2045</small></a>
            </div>
            <a className="small text-body text-uppercase font-weight-medium" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
          </div>
          <div className>
            <div className="mb-2">
              <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href>Business</a>
              <a className="text-body" href><small>Jan 01, 2045</small></a>
            </div>
            <a className="small text-body text-uppercase font-weight-medium" href>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
          </div>
        </div>
      </div></div></div>

)
}
export default Post;