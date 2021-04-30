import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class LocationContentfulTemplate extends React.Component {
  render() {
    const location = this.props.data.contentfulLocation

    return (
      <Layout>
        <div>
            <h1>Name: {location.name}</h1>
        </div>
        <div>
            <h2>Description: {location.description.description}</h2>
        </div>
        <div>
            Custom Field 1: {location.customField1.customField1}
        </div>
        <div>
            Custom Field 2: {location.customField2.customField2}
        </div>
        <div>
            Custom Field 3: {location.customField3.customField3}
        </div>
        <div>
            Custom Field 4: {location.customField4.customField4}
        </div>
        <div>
            Custom Field 5: {location.customField5.customField5}
        </div>
        <div>
            Photo: {location.photo}
        </div>
      </Layout>
    )
  }
}

export default LocationContentfulTemplate

export const pageQuery = graphql`
    query($id: String!) {
        contentfulLocation(id: { eq: $id })
        {
            name
            description {
              description
            }
            customField1 {
                customField1
            }
            customField2 {
                customField2
            }
            customField3 {
                customField3
            }
            customField4 {
                customField4
            }
            customField5 {
                customField5
            }
            photo
        }
    }
`