export default function Companies(props) {

    return (
        <div>
          { props.companies.data.map( company => 
            (
              <>
                <div>{company.attributes.name}</div>
                <div>{company.attributes.website}</div>
              </>
            )
          )}
        </div>
      )
  }
  
  export async function getStaticProps() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/companies`
    )
    const companies = await res.json()
      console.log(JSON.stringify(companies))
    return {
      props: {companies}
    }
  }
  