import OnlyHeader from '@/app/OnlyHeader'
import React from 'react'
import Head from 'next/head';
import '../cssfiles/Jobs.css'

const jobsData = [
  { name: 'Software Engineer', salary: '$100,000' },
  { name: 'Project Manager', salary: '$90,000' },
  { name: 'Sales Executive', salary: '$80,000' },
];

const jobs = () => {
  return (
    <div>
    <OnlyHeader />
    <div className="container">
      <Head>
        <title>Job Listings</title>
      </Head>
      <h1>Job Listings</h1>
      <div className="jobListings">
        {jobsData.map((job, index) => (
          <div className="jobCard" key={index}>
            <h2>{job.name}</h2>
            <p>Salary: {job.salary}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
  )
}

export default jobs
