import React from "react"
import ContentLoader from "react-content-loader"

const ListOfGroupLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1350}
    height={800}
    viewBox="0 0 1200 800"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="450" y="40" rx="0" ry="0" width="319" height="37" /> 
    <rect x="9" y="625" rx="0" ry="0" width="1180" height="123" /> 
    <rect x="1070" y="122" rx="15" ry="15" width="119" height="34" /> 
    <rect x="9" y="183" rx="0" ry="0" width="1180" height="123" /> 
    <rect x="9" y="322" rx="0" ry="0" width="1180" height="123" /> 
    <rect x="9" y="461" rx="0" ry="0" width="1180" height="123" />
  </ContentLoader>
)

export default ListOfGroupLoader;
