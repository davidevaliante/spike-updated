import React, { useContext } from 'react'
import Layout from './../components/Layout'
import styled from 'styled-components'

interface Props {
	
}

const index = (props: Props) => {


	return (
		<Layout>
			<Grid>
				<Box color='dodgerblue'/>
				<Box color='tomato'/>
				<Box color='mediumseagreen'/>
				<Box color='coral'/>
				<Box color='orchid'/>
				<Box color='lightseagreen'/>
				<Box color='plum'/>
				<Box color='burlywood'/>
				<Box color='darkslategray'/>
				<Box color='mediumseagreen'/>
				<Box color='orchid'/>
				<Box color='dodgerblue'/>

				<Box color='dodgerblue'/>
				<Box color='tomato'/>
				<Box color='mediumseagreen'/>
				<Box color='coral'/>
				<Box color='orchid'/>
				<Box color='lightseagreen'/>
				<Box color='plum'/>
				<Box color='burlywood'/>
				<Box color='darkslategray'/>
				<Box color='mediumseagreen'/>
				<Box color='orchid'/>
				<Box color='dodgerblue'/>

				<Box color='dodgerblue'/>
				<Box color='tomato'/>
				<Box color='mediumseagreen'/>
				<Box color='coral'/>
				<Box color='orchid'/>
				<Box color='lightseagreen'/>
				<Box color='plum'/>
				<Box color='burlywood'/>
				<Box color='darkslategray'/>
				<Box color='mediumseagreen'/>
				<Box color='orchid'/>
				<Box color='dodgerblue'/>

			</Grid>
		</Layout>
	)
}

const Grid = styled.div`
	display : flex;
	flex-wrap : wrap;
	align-items : center;
	justify-content :center;
`

interface BoxProps {
	color : string
}

const Box  = styled.div`
	width : 350px;
	height : 250px;
	border-radius : 25px;
	background : ${(props : BoxProps) => props.color};
	margin : 1rem;
`


export default index
