import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
import Repo from '../components/Repo'

function Repository() {
  const { userName } = useParams()
  const [infos, setInfos] = useState(null);

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const loadInfos = async () => {
      setLoading(true)
      setInfos(null)
      const res = await fetch(`https://api.github.com/users/${userName}/repos`);
      const data = await res.json();
      
      setLoading(false)
      setInfos(data)
    }
    loadInfos()
  }, [userName]);

  return (
    <div>
      {loading && <Loading />}
      {infos && <Repo infos={infos} />}


    </div>
  )
}

export default Repository