import { useState } from 'react'

export default function HowTo() {
	const [isExpanded, setIsExpanded] = useState(false)
	const [expandedSections, setExpandedSections] = useState({
		basic: false,
		indepth: false,
	})

	const toggleSection = (section) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}))
	}

	return (
		<section
			className={`space-y-4 border rounded-lg p-6 transition-colors mb-8 ${
				isExpanded ? 'bg-gray-50' : 'bg-white'
			}`}>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className='flex justify-between items-center w-full text-left group'>
				<h2 className='text-2xl font-semibold text-gray-900'>How to Perform an Audit</h2>
				<span
					className={`transform transition-transform text-gray-700 cursor-pointer ${
						isExpanded ? 'rotate-90' : ''
					}`}>
					▶
				</span>
			</button>
			{isExpanded && (
				<div className='container mx-auto space-y-6'>
					<p className='text-gray-900 font-medium'>
						This guide contains instructions for both Basic and In-depth accessibility audits. Start
						with the Basic workflow if you're new to accessibility testing, or use the In-depth
						workflow for a more comprehensive audit.
					</p>

					{/* Basic Workflow Section */}
					<div className='border-t pt-6'>
						<button
							onClick={() => toggleSection('basic')}
							className='flex justify-between items-center w-full text-left'>
							<h3 className='text-xl font-semibold text-gray-900'>
								Basic Accessibility Audit Workflow
							</h3>
							<span
								className={`transform transition-transform text-gray-700 cursor-pointer ${
									expandedSections.basic ? 'rotate-90' : ''
								}`}>
								▶
							</span>
						</button>
						{expandedSections.basic && (
							<div className='mt-4'>
								<div className='mb-8'>
									<h3 className='text-lg font-semibold mb-4'>Preparation</h3>
									<ul className='list-disc pl-6 mb-4'>
										<li>
											Select Pages
											<ul className='list-disc pl-6 mt-2'>
												<li>Homepage + 3-5 critical pages (e.g., contact, services, forms).</li>
											</ul>
										</li>
										<li>
											Set Up Tools
											<ul className='list-disc pl-6 mt-2'>
												<li>
													Pick a tool from Automated Tools, eg.{' '}
													<a
														href='https://silktide.com/installed-silktide-toolbar/'
														className='text-blue-600'>
														Silktide Accessibility Checker
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>

								<div className='mb-8'>
									<h3 className='text-lg font-semibold mb-4'>Initial Checks (Per Page)</h3>
									<ul className='list-disc pl-6'>
										<li>Run tool from Automated Tools section</li>
									</ul>
								</div>

								<div className='mb-8'>
									<h3 className='text-lg font-semibold mb-4'>
										Accessibility Audit - Initial Checks
									</h3>
									<p className='italic mb-4'>
										Go through each check, note any issues in the Audit Results form, and add
										specific observations.
									</p>

									<ol className='list-decimal pl-6 space-y-6'>
										<li>
											<strong>Image Alternative Text</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Ensure all non-decorative images have
													meaningful alt text describing their purpose or content.
												</li>
												<li>
													<strong>How to check:</strong> Right-click → Inspect Element → Look for
													&lt;img&gt; with alt="...".
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> "Company logo: stylized tree icon with text
															'Dianthus Omsorg'."
														</li>
														<li>
															<strong>Bad:</strong> "Image1.jpg" or missing alt text.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Page Title</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> The page title should be unique and
													descriptive (seen in the browser tab).
												</li>
												<li>
													<strong>How to check:</strong> Look at the browser tab or inspect
													&lt;title&gt; in the HTML.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> "Contact Us - Dianthus Omsorg"
														</li>
														<li>
															<strong>Bad:</strong> "Untitled" or just "Home".
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Headings</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Headings should follow a logical hierarchy
													and be descriptive.
												</li>
												<li>
													<strong>How to check:</strong> Inspect the page structure with a browser
													extension like Web Developer or use dev tools (Elements tab).
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> "&lt;h1&gt; About Us &lt;/h1&gt; → &lt;h2&gt;
															Our Team &lt;/h2&gt;"
														</li>
														<li>
															<strong>Bad:</strong> Skipping levels (&lt;h1&gt; to &lt;h3&gt;) or
															generic text like "Section 1".
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Color Contrast</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Text should have sufficient contrast
													against the background (ratio ≥ 4.5:1 for small text).
												</li>
												<li>
													<strong>How to check:</strong> Use a contrast checker like{' '}
													<a
														href='https://webaim.org/resources/contrastchecker/'
														className='text-blue-600'>
														WebAIM Contrast Checker
													</a>
													.
												</li>
												<li>
													<a
														href='https://chromewebstore.google.com/detail/color-contrast-checker-by/hfcoldjibhgbnlambdiecfneiegagkhi?hl=en'
														className='text-blue-600'>
														Chrome Extension for Color Contrast
													</a>
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> Dark blue text on a white background.
														</li>
														<li>
															<strong>Bad:</strong> Light gray text on white background, making it
															hard to read.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Skip Link</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> A "Skip to main content" link should
													appear when tabbing through the page.
												</li>
												<li>
													<strong>How to check:</strong> Press Tab on the keyboard from the top of
													the page.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> The link is visible and works when tabbing.
														</li>
														<li>
															<strong>Bad:</strong> No skip link, forcing keyboard users to tab
															through the entire menu first.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Visible Keyboard Focus</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> All interactive elements (links, buttons,
													forms) should be keyboard accessible with a clear focus indicator.
												</li>
												<li>
													<strong>How to check:</strong> Navigate using Tab and Shift + Tab.
													(Keyboard Traps: Esc to close modals/popups, etc.)
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> Buttons and links get a visible outline when
															focused.
														</li>
														<li>
															<strong>Bad:</strong> No focus outline, or can't activate dropdowns
															via keyboard.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Language of Page</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> The correct language is set in the HTML.
												</li>
												<li>
													<strong>How to check:</strong> Right-click → Inspect → Check &lt;html
													lang="en"&gt;.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> &lt;html lang="sv"&gt; for a Swedish page.
														</li>
														<li>
															<strong>Bad:</strong> No lang attribute or incorrect language.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Zoom</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> At 200% zoom, content should remain
													readable without horizontal scrolling.
												</li>
												<li>
													<strong>How to check:</strong> Zoom in (Ctrl + + on Windows, Cmd + + on
													Mac).
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> Text adjusts properly; no cut-off or
															overlapping elements.
														</li>
														<li>
															<strong>Bad:</strong> Horizontal scrolling is needed, or text
															overlaps.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Body Text Review</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Text should be clear, well-structured, and
													avoid vague links like "click here."
												</li>
												<li>
													<strong>How to check:</strong> Read through the text; look for descriptive
													headings and links.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> "Visit our Contact Us page for support."
														</li>
														<li>
															<strong>Bad:</strong> `"Click here" with no context.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Screen Reader Test</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Content should be read in a logical order
													without skipping important elements.
												</li>
												<li>
													<strong>How to check:</strong> Use NVDA (Windows) or VoiceOver (Mac) to
													navigate.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> The screen reader announces headings, buttons,
															and links correctly.
														</li>
														<li>
															<strong>Bad:</strong> Important text is skipped, or links are not
															labeled properly.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Tables</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Data tables should use proper headers
													(&lt;th&gt;) and captions.
												</li>
												<li>
													<strong>How to check:</strong> Inspect the table HTML.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> &lt;th&gt; elements for column headers, a
															&lt;caption&gt; for description.
														</li>
														<li>
															<strong>Bad:</strong> Tables used only for layout, with no clear
															headers.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Captions</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Videos should have accurate, synchronized
													captions for spoken content.
												</li>
												<li>
													<strong>How to check:</strong> Play the video and check for captions.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> Captions are accurate and match the speech.
														</li>
														<li>
															<strong>Bad:</strong> No captions, or auto-generated captions full of
															errors.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Transcripts</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Audio content should have a text
													transcript available.
												</li>
												<li>
													<strong>How to check:</strong> Check if a transcript is linked near the
													audio.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> Podcast includes a transcript link.
														</li>
														<li>
															<strong>Bad:</strong> No transcript available.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Audio Description</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Videos with important visual content
													should have audio descriptions.
												</li>
												<li>
													<strong>How to check:</strong> See if a version with narration exists.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> A version of the video with audio descriptions.
														</li>
														<li>
															<strong>Bad:</strong> Important visuals (text on screen, gestures) not
															described.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Form Labels</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> All form fields should have descriptive
													labels (not just placeholder text).
												</li>
												<li>
													<strong>How to check:</strong> Inspect &lt;label&gt; elements in HTML.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> &lt;label for="email"&gt;Email
															Address:&lt;/label&gt;
														</li>
														<li>
															<strong>Bad:</strong> Placeholder text "Enter email" with no label.
														</li>
													</ul>
												</li>
											</ul>
										</li>

										<li>
											<strong>Required Fields</strong>
											<ul className='list-disc pl-6 mt-2'>
												<li>
													<strong>What to check:</strong> Required form fields should be clearly
													marked.
												</li>
												<li>
													<strong>How to check:</strong> Look for asterisks or explicit "Required"
													text.
												</li>
												<li>
													<strong>Examples:</strong>
													<ul className='list-disc pl-6 mt-2'>
														<li>
															<strong>Good:</strong> "*Required field" or aria-required="true".
														</li>
														<li>
															<strong>Bad:</strong> No indication of required fields.
														</li>
													</ul>
												</li>
											</ul>
										</li>
									</ol>
								</div>

								<div className='mb-8'>
									<h3 className='text-lg font-semibold mb-4'>Document Findings</h3>
									<ul className='list-disc pl-6'>
										<li>Record observations for each test in an Audit Results form</li>
									</ul>
								</div>

								<div className='mb-8'>
									<h3 className='text-lg font-semibold mb-4'>LLM Summary</h3>
									<ul className='list-disc pl-6'>
										<li>Copy observations into an LLM for summarization</li>
										<li>Add summary to the Audit report</li>
									</ul>
								</div>
							</div>
						)}
					</div>

					{/* In-depth Workflow Section */}
					<div className='border-t pt-6'>
						<button
							onClick={() => toggleSection('indepth')}
							className='flex justify-between items-center w-full text-left'>
							<h3 className='text-xl font-semibold text-gray-900'>
								In-depth Accessibility Audit Workflow
							</h3>
							<span
								className={`transform transition-transform text-gray-700 cursor-pointer ${
									expandedSections.indepth ? 'rotate-90' : ''
								}`}>
								▶
							</span>
						</button>
						{expandedSections.indepth && (
							<div className='mt-4'>
								<div className='mb-8'>
									<h3 className='text-lg font-semibold mb-4'>Preparation</h3>
									<ul className='list-disc pl-6'>
										<li>
											Select Pages
											<ul className='list-disc pl-6 mt-2'>
												<li>Homepage + 3-5 critical pages (e.g., contact, services, forms).</li>
											</ul>
										</li>
										<li>
											Set Up Tools
											<ul className='list-disc pl-6 mt-2'>
												<li>
													Pick a tool from Automated Tools, eg.{' '}
													<a
														href='https://silktide.com/installed-silktide-toolbar/'
														className='text-blue-600'>
														Silktide Accessibility Checker
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>

								<p className='mb-6'>
									Go through each check in{' '}
									<a
										href='https://www.w3.org/WAI/eval/report-tool/evaluation/audit-sample'
										className='text-blue-600'>
										W3C WAI Evaluation Report Tool
									</a>{' '}
									or{' '}
									<a
										href='https://www.levelaccess.com/thank-you-download-the-must-have-wcag-2-1-checklist/'
										className='text-blue-600'>
										WCAG Checklist by Level Access
									</a>
								</p>
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	)
}
