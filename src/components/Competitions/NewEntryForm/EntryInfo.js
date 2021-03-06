import React, {Component} from 'react';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';
import ReactSVG from 'react-svg'

import ImageInput from 'kt-components/ImageUploader';
import MinimalButton from 'kt-components/MinimalButton';

import upload from './../../../assets/upload.svg'

class EntryInfo extends Component {
    constructor() {
        super();
        this.state={
            primaryPhoto: ' ',
            secondaryPhotos: [],
            name: ' ',
            description: ' '
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.submitEntry = this.submitEntry.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleImageChange({ previousUrl, currentUrl, id }) {
      const { secondaryPhotos } = this.state

      if (id === 1) {
        this.setState({ primaryPhoto: currentUrl })
      } else {
        let otherImages = [...secondaryPhotos]

        const index = otherImages.indexOf(previousUrl)

        if(index === -1) {
          otherImages.push(currentUrl)
        } else {
          otherImages.splice(index, 1, currentUrl)
        }

        this.setState({ secondaryPhotos: otherImages })
      }
    }

    submitEntry() {
      const { mutate, competition, close } = this.props
      const { name, description, primaryPhoto, secondaryPhotos } = this.state
      console.log(mutate)
      console.log('submitEntry')
      mutate({
        variables: {
          input: {
            name: name,
            desc: description,
            primaryPhoto: primaryPhoto,
            otherMedia: secondaryPhotos,
            CompetitionId: competition.id
          }
        }
      })
      close()
    }

    render() {
    return (
        <div>
            <ImgContainer>
                <ImageInput id={1} addImageButton={AddImageButton} onChange={this.handleImageChange}/>
                <ImageInput id={2} onChange={this.handleImageChange}/>
                <ImageInput id={3} onChange={this.handleImageChange}/>
                <ImageInput id={4} onChange={this.handleImageChange}/>
                <ImageInput id={5} onChange={this.handleImageChange}/>
            </ImgContainer>
            <ImgDescription>(cover photo)</ImgDescription>

            <Container>
                <NameInput
                    name="name"
                    onChange={this.handleChange}
                    placeholder='Knife Name'
                />
                <DescriptionInput
                    name="description"
                    placeholder='Write Description'
                    onChange={this.handleChange}
                />
            </Container>
            <SubmitButton onClick={this.submitEntry}> Submit Entry </SubmitButton>
        </div>
    );
};
}

const submitEntry = gql`
  mutation newEntry($input: EntryInput) {
    submitEntry(input:$input) {
      id
      design {
        id
        name
        desc
      }
    }
  }
`

export default graphql(submitEntry)(EntryInfo);

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NameInput = styled.input`
    width: 300px;
    border: 0.5px solid #bfbfbf;
    padding: 10px;
    font-size: 10pt;
    &::placeholder {
        color: #bfbfbf;
    }
`
const DescriptionInput = styled.textarea`
    margin-top: 10px;
    width: 280px;
    border: 0.5px solid #bfbfbf;
    padding: 10px;
    font-size: 10pt;
    height: 80px;
    vertical-align: top;
    resize: none;
    &::placeholder {
        color: #bfbfbf;
    }
`
const ImgContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0px 20px;
`
const ImgDescription = styled.p`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    color: #bfbfbf;
    padding: 5px 40px;
`
const SubmitButton = styled(MinimalButton)`
    background: ${props => props.theme.main};
    font: ${props => props.theme.mainFont({})};
    margin: 30px auto;
    color: white;
    font-size: 16pt;
    padding: 10px 60px;
    border-radius: 30px;
    border-style: none;
`
const AddImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  border: 3px solid #d9d9d9;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 10pt;
  font-weight: 700;
  color: #d9d9d9;
  &:hover {
    background-color: ${props => props.theme.main};
    border-color: ${props => props.theme.main};
    color: white;
    & svg {
      stroke: white;
    }
  }
`
const AddButtonIcon = styled(ReactSVG)`
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #d9d9d9;
  width: 35px;
  height: 35px;
  margin: 5px;
  cursor: pointer;
`
const AddImageButton = props => (
  <AddImageContainer>
    <AddButtonIcon path={upload} />
    Upload Photos
  </AddImageContainer>
)
