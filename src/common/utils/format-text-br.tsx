export const formatTextBr = (message: string) => {
  const punctuationIndex = message.search(/[?.!]/)

  if (punctuationIndex !== -1) {
    const firstPart = message.slice(0, punctuationIndex + 1)
    const restPart = message.slice(punctuationIndex + 1).trim()

    return (
      <>
        {firstPart} <br />
        {restPart}
      </>
    )
  }

  return message
}
