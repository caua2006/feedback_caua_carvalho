import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";
import IconStarImg from '../assets/icon-star.svg'
import ThankYouImg from '../assets/illustration-thank-you.svg'
import { useState } from "react";

export function Home() {
  const  [showCard, setShowCard] = useState(false) 

  const [feedbackNotes,setFeedbackNotes] = useState(0)

  function handleFeedbackButtonClick(e){
    const feedbackContent = Number(e.target.innerText)
    setFeedbackNotes(feedbackContent)
  }
  function handleButtonSubmit(){
    if (feedbackNotes === 0) return
    setShowCard(true)
  }
  return (
    showCard === false ? (
      <CardContainer>
      <IconContainer>
        <img src={IconStarImg} alt="Ícone de estrela" />
      </IconContainer>
      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonContainer>
        <button onClick={handleFeedbackButtonClick}>1</button>
        <button onClick={handleFeedbackButtonClick}>2</button>
        <button onClick={handleFeedbackButtonClick}>3</button>
        <button onClick={handleFeedbackButtonClick}>4</button>
        <button onClick={handleFeedbackButtonClick}>5</button>
      </ButtonContainer>

      <button onClick={handleButtonSubmit}>Enviar</button>
    </CardContainer>
    ) : (
      <CardContainer>
        <img src={ThankYouImg} alt="Imagem de agradecimento" />

        <ResultContainer>
          <p>Você selecionou {feedbackNotes} de 5</p>
        </ResultContainer>
         <h1>Obrigado!</h1>
         <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </CardContainer>

      
    )
  )
}
