
export const HOME = `
query HOME_FOR_COUNTRY($countryCode : String) {
    homes(where:{country:{code:$countryCode}}){
        topArticle
        bottomArticle
        seo{
            seoTitle
            seoDescription
        }
    		
        producerSlots{
          slot{
            slot{
              id
              name
              image{
                  url
              }
              slug
              type
              rating
            }
          }
        }
    
    		onlineSlots{
          slot{
            slot{
              id
              name
              image{
                  url
              }
              slug
              type
              rating
            }
          }
        }
    		
    		barSlots{
          slot{
            slot{
              id
              name
              image{
                  url
              }
              slug
              type
              rating
            }
          }
        }

				vltSlots{
          slot{
            slot{
              id
              name
              image{
                  url
              }
              slug
              type
              rating
            }
          }
        } 
    
    		bonuses{
          bonus{
            bonus{
              name
              link
              country{
                  code
              }
              circular_image{
                  url
              }
              bonus_guide{
                  slug
              }
              borderColor
              backgroundColor
              noDeposit
              withDeposit
              tips
              rating
            }
          }
        }
    }
  }
`

