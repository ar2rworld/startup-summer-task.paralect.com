import React from 'react'
const Profile=(props)=>{
  const formatNumber=(num)=>{
    return new Intl.NumberFormat('en-GB', {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits:1
    }).format(num);
  }
  return(<div className="Profile">
    {/*<i>Profile is loading</i>*/}
    {(props?
    <div>
      <img className="ProfileIMG" src={props.profile.avatar_url} />
      <h2>{props.profile.name}</h2>
      <h3><a target="none" href={props.profile.html_url}>{props.profile.login}</a></h3>
      <p>👥{formatNumber(props.profile.followers)} followers 👥{formatNumber(props.profile.following)} following</p>
    </div>
    :
    <div className="loader"></div>)}
  </div>)
}
export default Profile