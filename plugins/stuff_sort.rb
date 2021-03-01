# _plugins/stuff_sort.rb

module Jekyll
    module DateFilter
        require 'date'
        def stuff_sort(collection)
            collection.sort_by do |e|
                [ Date.parse(e.data['dateto']), Date.parse(e.data['datefrom']) ]
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::DateFilter)

