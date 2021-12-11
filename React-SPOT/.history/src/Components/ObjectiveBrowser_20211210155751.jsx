import ObjectivesSearchForm from "./ObjectivesSearchForm";
import ObjectivesList from "./ObjectivesList";

const ObjectiveBrowser = () => {
  return (
    <ObjectivesSearchFrom
      searchDetails={searchDetails}
      newSearchDetails={newSearchDetails}
    />
    <ObjectivesList objectives={filteredObjectives} />
  );
};
