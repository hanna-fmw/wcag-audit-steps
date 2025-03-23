const auditResults = [
	{
		criteria: '1.1.1 Non-text Content',
		state: 'Failure',
		observations: 'Issue 1',
		where: 'Everywhere',
		severity: 'Showstopper',
	},
	{
		criteria: '1.4.2 Audio Control',
		state: 'Success',
		observations: 'Issue 2',
		where: '1. Login',
		severity: '',
	},
	{
		criteria: '1.2.3 Audio Description or M...',
		state: 'Success',
		observations: 'Issue 3',
		where: '2. Home',
		severity: '',
	},
	{
		criteria: '1.4.11 Non-text Contrast',
		state: 'Failure',
		observations: 'Issue 4',
		where: '2. Home',
		severity: 'Serious',
	},
	{
		criteria: '1.3.1 Info and Relationships',
		state: 'Failure',
		observations: 'Issue 5',
		where: '2. Home',
		severity: 'Serious',
	},
	{
		criteria: '1.1.1 Non-text Content',
		state: 'Failure',
		observations:
			'When selecting an option from the language selection options the context of the page changes directly without confirmation',
		where: '2. Home',
		severity: 'Serious',
	},
	{
		criteria: '1.4.10 Reflow',
		state: 'Failure',
		observations: 'Tooltip is not announced',
		where: '2. Home',
		severity: 'Serious',
	},
	{
		criteria: '1.4.10 Reflow',
		state: 'Failure',
		observations: 'Tooltip has no focus state',
		where: '2. Home',
		severity: 'Serious',
	},
	{
		criteria: '1.2.2 Captions (Prerecorded)',
		state: 'Failure',
		observations: 'Tooltip is not announced with name, role, state',
		where: '2. Home',
		severity: 'Minor',
	},
	{
		criteria: '1.2.3 Audio Description or M...',
		state: 'Failure',
		observations: 'Tooltip is incorrectly announced as a <list>',
		where: '3. Product overview',
		severity: 'Minor',
	},
	{
		criteria: '1.2.4 Captions (Live)',
		state: 'Failure',
		observations: "Button 'Shop now' is not associated to section 'Mens shirt'.",
		where: '3. Product overview',
		severity: 'Minor',
	},
	{
		criteria: '1.1.1 Non-text Content',
		state: 'Failure',
		observations: 'Orange text on the page contrast ratio is too low (2.48:1 vs 3:1)',
		where: '3. Product overview',
		severity: 'Minor',
	},
	{
		criteria: '1.1.1 Non-text Content',
		state: 'Failure',
		observations: 'Radio button border color contrast ratio is insufficient (1.49:1 vs 3:1)',
		where: '3. Product overview',
		severity: 'Best Practice',
	},
	{
		criteria: '1.2.3 Audio Description or M...',
		state: 'Failure',
		observations: 'Button color - contrast ratio is insufficient (2.48:1 vs 3:1)',
		where: '4. Detailpage',
		severity: 'Best Practice',
	},
	{
		criteria: '3.1.1 Language of Page',
		state: 'Failure',
		observations: "Page title doesn't describe topic of page",
		where: '4. Detailpage',
		severity: 'Best Practice',
	},
	{
		criteria: '2.4.1 Bypass Blocks',
		state: 'Failure',
		observations: "Heading doesn't respresent topic or purpose of section",
		where: '5. Flopsa',
		severity: 'Serious',
	},
	{
		criteria: '2.4.1 Bypass Blocks',
		state: 'Failure',
		observations: "Code doesn't communicate language of the page",
		where: '5. Flopsa',
		severity: 'Serious',
	},
	{
		criteria: '1.4.3 Contrast (Minimum)',
		state: 'Failure',
		observations: "Heading doesn't respresent topic or purpose of section",
		where: '1. Login',
		severity: 'Showstopper',
	},
]

export default function AuditResults() {
	return (
		<div className='container mx-auto p-4'>
			<h2 className='text-2xl text-black font-bold mb-4'>Audit Results</h2>
			<div className='overflow-x-auto'>
				<table className='min-w-full bg-white border border-gray-300 text-gray-900'>
					<thead>
						<tr className='bg-gray-100'>
							<th className='border p-2'>Criteria</th>
							<th className='border p-2'>State</th>
							<th className='border p-2'>Observations</th>
							<th className='border p-2'>Where</th>
							<th className='border p-2'>Severity</th>
						</tr>
					</thead>
					<tbody>
						{auditResults.map((result, index) => (
							<tr key={index} className='border-b'>
								<td className='border p-2'>{result.criteria}</td>
								<td
									className={`border p-2 ${
										result.state === 'Failure'
											? 'bg-red-100'
											: result.state === 'Success'
											? 'bg-green-100'
											: ''
									}`}>
									{result.state}
								</td>
								<td className='border p-2'>{result.observations}</td>
								<td className='border p-2'>{result.where}</td>
								<td
									className={`border p-2 ${
										result.severity === 'Showstopper'
											? 'bg-red-600 text-white'
											: result.severity === 'Serious'
											? 'bg-orange-200'
											: result.severity === 'Minor'
											? 'bg-yellow-100'
											: result.severity === 'Best Practice'
											? 'bg-blue-100'
											: ''
									}`}>
									{result.severity}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
