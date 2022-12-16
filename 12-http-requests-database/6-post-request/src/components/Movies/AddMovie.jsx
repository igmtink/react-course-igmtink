import { Modal, Button, Input, TextArea } from '../UI/UIShared'
import { useRef, useState } from 'react'
import { dateFormatter } from '../Helper/Helper'

const AddMovie = props => {
  const titleRef = useRef('')
  const openingCrawlRef = useRef('')
  const releaseDateRef = useRef('')

  const submitHandler = e => {
    e.preventDefault()

    const movie = {
      title: titleRef.current.value,
      openingCrawl: openingCrawlRef.current.value,
      releaseDate: dateFormatter(releaseDateRef.current.value)
    }

    props.addMovie(movie)

    console.log(movie)
  }

  return (
    <Modal className="p-4">
      <form onSubmit={submitHandler} className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 gap-4">
          <Input
            className="bg-neutral-800"
            attr={{ type: 'text', placeholder: 'Title', ref: titleRef }}
          />
          <TextArea
            className="bg-neutral-800"
            attr={{
              type: 'text',
              placeholder: 'Opening Crawl',
              rows: '5',
              ref: openingCrawlRef
            }}
          />
          <Input
            className="bg-neutral-800"
            attr={{
              type: 'text',
              placeholder: 'Release Date',
              ref: releaseDateRef
            }}
          />
        </div>
        <Button
          className="px-4 py-2 bg-red-900 hover:bg-red-900/70 transition-colors"
          type="submit"
        >
          Add Movie
        </Button>
      </form>
    </Modal>
  )
}

export default AddMovie
