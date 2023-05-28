export default function usersBuilder(sourceArray) {
   const resultArray = sourceArray.reduce((acc, user) => {
      const userIndex = acc.findIndex((item) => item.id === user.id);

      if (userIndex === -1) {
         acc.push({
            user_id: user.id,
            body: {
               first_name: user.first_name,
               mid_name: user.mid_name,
               last_name: user.last_name,
               role: user.role,
               phone: user.phone,
               email: user.email,
               city: user.city,
               skills: ['Крутой спец', 'Молодец'],
               birstday: user.birstday
            }

         })
      }
      return acc
   }, [])
   return resultArray
}