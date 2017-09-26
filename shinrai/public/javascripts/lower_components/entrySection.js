import React from 'react';

export default class EntrySection extends React.Component {
	render() {
		const { title, description, stats, header, types, image, extra, fontSize, table } = this.props; //object, object, array of object, array of objects, jsx map, component
		const nameStyle = {
			fontSize: fontSize,
			borderRadius: '5px',
			borderLeft: '3px solid white',
			borderRight: '3px solid white',
			borderTop: '3px solid white',
			marginTop: '2%',
			backgroundColor: 'gray',
			fontFamily: 'Georgia'
		};

		const statStyle = {
			border: '1px solid white'
		};

		const labelStyle = {
			fontSize: '105%',
			fontWeight: 'bold',
			fontFamily: 'Georgia'
		};

		const imageDiv = (
			<div className='col-xs-4 col-sm-2 col-lg-2' style={{marginTop: '1%'}}>
				<div className='col-xs-12'>
					{image}
				</div>
			</div>
		);
		
		//div for the section's description.
		const headerDiv = header.map((obj, index) =>
			<div className={obj.divClass} style={{...labelStyle, fontSize: (obj.size !== undefined) ? obj.size : '150%', marginTop: (obj.margin !== undefined) ? obj.margin : '.5%',
				color: (obj.color !== undefined) ? obj.color : ''}} key={title.title+'header_obj'+index}>
				{obj.text}
			</div>
		);
		
		//div for displaying any stats in the section as defined by the stats variable. Each stat has a title, color, and value.
		let statsDiv;
		if (stats) {
			statsDiv = stats.map((obj, index) =>
				<div key={title.title+'stats_div'+index}>
					<div className='col-xs-8 col-sm-2 col-md-1' style={{...labelStyle, color: obj.color}} key={title.title+'stats_obj_1_'+index}>
						{obj.type}	
					</div>
					<div className='col-xs-4 col-sm-2' key={title.title+'stats_obj_2_'+index}>
						{obj.value}
					</div>
				</div>
			);
		}

		//div for the section's table stats if any. The table has a title array with elements containing a title and value 
		//and a row array containing an array of cells with each element having a color and value. There is also an optional backgroundColor element.
		let tableDiv, tableHeaders, tableValues;
		if (table) {
			tableHeaders = table.titles.map((obj, index) => 
				<th style={{color: obj.color, textAlign: 'center'}} key={title.title+'th'+index}>{obj.value}</th>
			);
			
			//each row needs to mapped to a <td> element
			const mappedRows = table.values.map((obj, index_x) => 
				obj.map((cell, index_y) =>
					<td style={{color: cell.color}} key={'td'+index_x+'_'+index_y}>{cell.value}</td>
				)
			);
			
			//each mapped <td> element needs to be placed into a <tr> element
			tableValues = mappedRows.map((row, index) =>
				<tr key={title.title+'tr'+index}>{row}</tr>
			);

			tableDiv = 
				<table className='table table-bordered' style={{backgroundColor: table.backgroundColor ? table.backgroundColor : '#696969', 
				marginTop: '2%', textAlign: 'center'}}>
					<thead>
						<tr>
							{tableHeaders}
						</tr>
					</thead>
					<tbody>
						{tableValues}
					</tbody>
				</table>;

		}

		return (
			<div>
				<div className='col-xs-12 col-sm-6' style={{...nameStyle, color: (title.color !== undefined) ? title.color : 'white'}}>
					{title.title}
				</div>
				<div className='col-xs-12' style={{...statStyle, backgroundColor: 'gray', marginBottom: '1%'}}>
					{image ? imageDiv : <div></div>}
					<div className={image ? 'col-xs-8' : 'col-xs-12'} style={{marginBottom: '1%'}}>
						{headerDiv}
						
						{description ? <div className='col-xs-12' style={{...labelStyle, color: description.color}}>{description.text}</div> : <div></div>}

						<div className='hidden-xs col-sm-2' style={labelStyle}>{types ? 'Type(s):' : ''}</div>
						<div className='col-xs-12 col-sm-10'>
							{types}
						</div>

						{stats ? statsDiv : <div></div>}

						{table ? tableDiv : <div></div>}

						{extra ? extra : <div></div>}
	
					</div>
				</div>
			</div>
		);
	}
}
EntrySection.defaultProps = {
	title: {title: ''}, 
	description: null, 
	stats: null, 
	header: [{divClass: 'col-xs-12', text: ''}], 
	types: '', 
	image: null,
	extra: null,
	fontSize: '105%',
	table: null
};