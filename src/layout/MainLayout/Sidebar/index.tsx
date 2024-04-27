// import styles from '@/layout/MainLayout/_styles/sidebar.module.css';

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
	console.log(isSidebarOpen);

	return (
		<>
			<aside
				id="sidebar"
				className={`flex fixed z-20 h-full top-0 left-0 pt-16 transition-width lg:flex w-64 flex-shrink-0 flex-col transition-width duration-100 ${
					isSidebarOpen ? '' : 'hidden w-0'
					// TODO: 좌우 애니메이션 구현하기
					// isSidebarOpen ? styles['sidebar-transition'] : 'hidden'
					// isSidebarOpen ? 'translate-x-0' : '-translate-x-full '
				}`}
				aria-label="Sidebar">
				<div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
					<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
						<div className="flex-1 px-3 bg-white divide-y space-y-1">
							<ul className="space-y-2 pb-2">
								<li>
									<form action="#" method="GET" className="lg:hidden">
										<label className="sr-only">Search</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<svg
													className="w-5 h-5 text-gray-500"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
												</svg>
											</div>
											<input
												type="text"
												name="email"
												id="mobile-search"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-cyan-600 block w-full pl-10 p-2.5"
												placeholder="Search"
											/>
										</div>
									</form>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
										<svg
											className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
											<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
										</svg>
										<span className="ml-3">Dashboard</span>
									</a>
								</li>
								<li>
									<a
										href="https://demo.themesberg.com/windster-pro/kanban/"
										target="_blank"
										className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group  bg-gray-100 {{ end }}">
										<svg
											className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
										</svg>
										<span className="ml-3 flex-1 whitespace-nowrap">Test</span>
										<span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">
											Pro
										</span>
									</a>
								</li>
								<li>
									<a
										href="https://demo.themesberg.com/windster-pro/mailing/inbox/"
										target="_blank"
										className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group  bg-gray-100 {{ end }}">
										<svg
											className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
											<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
										</svg>
										<span className="ml-3 flex-1 whitespace-nowrap">Test</span>
										<span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">
											Pro
										</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group  bg-gray-100 {{ end }}">
										<svg
											className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
												clipRule="evenodd"></path>
										</svg>
										<span className="ml-3 flex-1 whitespace-nowrap">Test</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group  bg-gray-100 {{ end }}">
										<svg
											className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
												clipRule="evenodd"></path>
										</svg>
										<span className="ml-3 flex-1 whitespace-nowrap">Test</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group  bg-gray-100 {{ end }}">
										<svg
											className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
												clipRule="evenodd"></path>
										</svg>
										<span className="ml-3 flex-1 whitespace-nowrap">Test</span>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group  bg-gray-100 {{ end }}">
										<svg
											className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
												clipRule="evenodd"></path>
										</svg>
										<span className="ml-3 flex-1 whitespace-nowrap">Test</span>
									</a>
								</li>
							</ul>
							<div className="space-y-2 pt-2">
								<a
									href="https://flowbite.com/docs/getting-started/introduction/"
									target="_blank"
									className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
									<svg
										className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
										<path
											fillRule="evenodd"
											d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
											clipRule="evenodd"></path>
									</svg>
									<span className="ml-3">Documentation</span>
								</a>
								<a
									href="https://flowbite.com/docs/components/alerts/"
									target="_blank"
									className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
									<svg
										className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
									</svg>
									<span className="ml-3">Components</span>
								</a>
								<a
									href="https://github.com/themesberg/windster-tailwind-css-dashboard/issues"
									target="_blank"
									className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
									<svg
										className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
											clipRule="evenodd"></path>
									</svg>
									<span className="ml-3">Help</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}