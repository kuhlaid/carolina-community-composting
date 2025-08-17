.PHONY: createEnvironment buildSite 

# This will install all of the components needed to run and build the website 
createEnvironment:
	yarn install

# This will compile the website resources and load the website for preview
buildSiteAndTest:
	( \
		yarn run build; \
		yarn run serve; \
	)