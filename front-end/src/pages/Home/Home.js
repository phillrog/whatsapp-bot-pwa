import Button from '@material-ui/core/Button'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import QuestionDialog from 'material-ui-shell/lib/containers/QuestionDialog/QuestionDialog'
import React, { lazy, Suspense , useContext } from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { useSimpleValues } from 'base-shell/lib/providers/SimpleValues'
import { Container, Box, BoxTitle, BoxText } from "./HomeStyles";
const QrCode = lazy(() => import('../QrCode/QrCode'));

const DIALOG_ID = 'demo_dialog'

const HomePage = () => {
  const intl = useIntl()
  const { setValue } = useSimpleValues()
  const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

  const boxData = [
    {
      id: Math.random(),
      title: "QrCode",
      text: (<Suspense fallback={<h1>Carregando…</h1>}>
        <QrCode></QrCode>
      </Suspense>),
      bgColor: "#D5CAFA"
    },
    {
      id: Math.random(),
      title: "Box titulo 2",
      text: lorem,
      bgColor: "#EDA9A9"
    },
    {
      id: Math.random(),
      title: "Box titulo 3",
      text: lorem,
      bgColor: "#F2EE8D"
    },
    {
      id: Math.random(),
      title: "Box titulo 4",
      text: lorem,
      bgColor: "#9FEACD"
    }
  ];
  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
        
        <Container>
          {boxData.map(box => (
            <Box key={box.id} bgColor={box.bgColor}>
              <BoxTitle>{box.title}</BoxTitle>
              <BoxText>{box.text}</BoxText>
            </Box>
          ))}
        </Container>
        
        <br />
        <Button
          onClick={() => {
            setValue(DIALOG_ID, true)
          }}
        >
          OPEN
        </Button>
        <QuestionDialog
          id={DIALOG_ID}
          title="Dialog title"
          message="Dialog message"
          action="OK"
          handleAction={(handleClose) => {
            //Do some stuff and then
            handleClose()
          }}
        />
      </Scrollbar>
    </Page>
  )
}
export default HomePage
