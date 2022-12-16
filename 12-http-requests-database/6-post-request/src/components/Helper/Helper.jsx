const dateFormatter = date => {
  let d = new Date(date)
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d)
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

  const dateFormatted = `${da}-${mo}-${ye}`

  console.log(dateFormatted)

  return dateFormatted
}

export { dateFormatter }
