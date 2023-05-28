export default function requestsBuilder(sourceArray) {
   const resultArray = sourceArray.reduce((acc, job) => {
      const requestNumIndex = acc.findIndex((item) => item.requestNum === job.requestnum);

      if (requestNumIndex === -1) {
         acc.push({
            requestNum: job.requestnum,
            jobs: [{
               position: job.position,
               city: job.city,
               description: job.description,
               count: job.count,
               keySkills: job.keyskills,
               responsibilities: [],
               requirements: []
            }]
         });
      } else {
         acc[requestNumIndex].jobs.push({
            position: job.position,
            city: job.city,
            description: job.description,
            count: job.count,
            keySkills: job.keyskills,
            responsibilities: [],
            requirements: []
         });
      }

      return acc;
   }, []);
   return resultArray
}