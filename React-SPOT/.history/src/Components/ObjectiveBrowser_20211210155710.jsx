const ObjectiveBrowser = () => {
  return (
    <ObjectivesSearchFrom
      searchDetails={searchDetails}
      newSearchDetails={newSearchDetails}
    />
    <ObjectivesList objectives={filteredObjectives} />
  );
};
